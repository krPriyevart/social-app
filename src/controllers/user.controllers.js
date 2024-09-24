import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        console.error(error);
        throw new ApiError(500, "Something went wrong while generating refresh and access tokens");
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body;
    console.log(fullName,email,username,password);
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Failed to upload avatar file");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        password
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfully")
    );
});


const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, password} = req.body;
    console.log(email);   console.log(password);
    //console.log(username);

    if (!email) {
        throw new ApiError(400, "username or email is required")
    }
    
    // Here is an alternative of above code based on logic discussed in video:
    // if (!(email || username)) {
    //     throw new ApiError(400, "username or email is required")
        
    // }

    // const user = await User.findOne({
    //     $or: [{username}, {email}]
    // })
    const user = await User.findOne({$or: [{email}]})

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true,
        
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})


const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))
})


const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User fetched successfully"
    ))
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullName, email} = req.body

    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName,
                email: email
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const updateUserAvatar = asyncHandler(async(req, res) => {
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const avatarLocalPath = req.file?.path;
console.log(avatarLocalPath);
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing")
    }

    //TODO: delete old image - assignment

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading on avatar")
        
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar: avatar.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Avatar image updated successfully")
    )
})

const updateUserCoverImage = asyncHandler(async(req, res) => {
    // const coverImageLocalPath = req.file?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
console.log(coverImageLocalPath);
    if (!coverImageLocalPath) {
        throw new ApiError(400, "Cover image file is missing")
    }

    //TODO: delete old image - assignment


    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!coverImage.url) {
        throw new ApiError(400, "Error while uploading on avatar")
        
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                coverImage: coverImage.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Cover image updated successfully")
    )
})

// const updateProfil = asyncHandler(async (req, res) => {
//   const { fullName, email, username, password } = req.body;
//   console.log(fullName,email);
// //   const avatarLocalPath = req.files?.avatar[0]?.path;
// //   let coverImageLocalPath;
// //   if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
// //       coverImageLocalPath = req.files.coverImage[0].path;
// //   }
// //     console.log(avatarLocalPath, coverImageLocalPath);

//   // Initialize variables for user update
//   let updatedUser = {};
  
//   // Update Name and Email
//   if (fullName || email || username) {
//     if ([fullName, email, username].some((field) => field?.trim() === "")) {
//         const existedUser = await User.findOne({
//         $or: [{ username }, { email }]
//     });

//     if (existedUser) {
//         throw new ApiError(409, "User with email or username already exists");
//     }
//     }
    
//     const accountUpdate = await User.findByIdAndUpdate(
//         req.user?._id,
//         {
//             $set: {
//                 fullName,
//                 username: username,
//                 email: email
//             }
//         },
//         {new: true}
        
//     ).select("-password");
//     updatedUser = { ...updatedUser, ...accountUpdate._doc };
//   }
  
//   // Update Password (ensure to add password hashing if necessary)
//   if (password) {
//     const hashedPassword = await bcrypt.hash(password, 10);  // Assuming bcrypt is used
//     await User.findByIdAndUpdate(
//       req.user?._id,
//       { $set: { password: hashedPassword } },
//       { new: true }
//     );
//   }

//   // Update Avatar
// //   if (avatarLocalPath) {
// //     const avatar = await uploadOnCloudinary(avatarLocalPath);
// //     // if (!avatar.url) throw new ApiError(400, "Error while uploading avatar");

// //     // TODO: Delete the old avatar if necessary
// //     console.log(req.user._id, avatar.url);
// //     const avatarUpdate = await User.findByIdAndUpdate(
// //       req.user._id,
// //       { $set: { avatar: avatar.url } },
// //       { new: true }
// //     ).select("-password");
// //     updatedUser = { ...updatedUser, ...avatarUpdate._doc };
// //   }
//   //----------------
// //   if (avatarLocalPath) {
    
// // //TODO: delete old image - assignment
// // const user = await User.findById(user._id).select("-password -refreshToken")
// // const avatarUrl = user.avatar;
// // avatarUrl = new URL(avatarUrl).pathname.split('/').pop().split('.')[0];
// // console.log(avatarUrl);
// // const avaratDelRes = await deleteOnCloudinary(avatarUrl);
// // console.log(avaratDelRes);
// // const avatar = await uploadOnCloudinary(avatarLocalPath)
// // console.log(avatar);


// // const userUpdate = await User.findByIdAndUpdate(
// //     req.user?._id,
// //     {
// //         $set:{
// //             avatar: avatar.url
// //         }
// //     },
// //     {new: true}
// // ).select("-password")

// // }

//   // Update Cover Image
// //   if (coverImageLocalPath) {
// //     const coverImage = await uploadOnCloudinary(coverImageLocalPath);
// //     // if (!coverImage.url) throw new ApiError(400, "Error while uploading cover image");

// //     // TODO: Delete the old cover image if necessary
// //     console.log(req.user._id, avatar.url);
// //     const coverImageUpdate = await User.findByIdAndUpdate(
// //       req.user._id,
// //       { $set: { coverImage: coverImage.url } },
// //       { new: true }
// //     ).select("-password");
// //     updatedUser = { ...updatedUser, ...coverImageUpdate._doc };
// //   }

//   return res.status(200).json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
// });


const updateProfile = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body;
    console.log(fullName, email);
    console.log('Files Are Uploaded Properly:',req.files); // Ensure this contains the files

    // Fetch uploaded files
    const avatarFile = req.files?.avatar?.[0];
    const coverImageFile = req.files?.coverImage?.[0];
  
    console.log('Avatar File Path:', avatarFile?.path);
    console.log('Cover Image File Path:', coverImageFile?.path);
  
    let updatedUser = {};
  
    // Update name, email, username
    if (fullName || email || username) {
      const accountUpdate = await User.findByIdAndUpdate(
        req.user?._id,
        {
          $set: {
            fullName,
            username,
            email,
          },
        },
        { new: true }
      ).select("-password");
      updatedUser = { ...updatedUser, ...accountUpdate._doc };
    }
  
    // Update Avatar
    if (avatarFile) {
      const avatar = await uploadOnCloudinary(avatarFile.path);
      const avatarUpdate = await User.findByIdAndUpdate(
        req.user._id,
        { $set: { avatar: avatar.url } },
        { new: true }
      ).select("-password");
      updatedUser = { ...updatedUser, ...avatarUpdate._doc };
    }
  
    // Update Cover Image
    if (coverImageFile) {
      const coverImage = await uploadOnCloudinary(coverImageFile.path);
      const coverImageUpdate = await User.findByIdAndUpdate(
        req.user._id,
        { $set: { coverImage: coverImage.url } },
        { new: true }
      ).select("-password");
      updatedUser = { ...updatedUser, ...coverImageUpdate._doc };
    }
  
    return res.status(200).json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
  });
  
  const dashboard = asyncHandler(async (req, res) => {
    try {
      console.log('Received body:', req.body);
      const { noteId, title, noteData, expDate } = req.body;
      
      // Extract file data from multer
      const attachment = req.files?.attachment?.[0];
        console.log(attachment.path);
      // Ensure required fields are present
      if (!noteId || !title || !noteData || !expDate) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      let uploadedAttachment = null;
    
      if (attachment) {
        console.log('File path:', attachment.path);
        uploadedAttachment = await uploadOnCloudinary(attachment.path);

        // Handle attachment (e.g., upload to cloud)
      }
    
  
      // Create or update the note in the user's data
      let userNote = {};
      const createNote = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $push: {
                "notesWithDetails.notes": {
                    noteId: noteId,
                    title: title,
                    noteData: noteData,
                    attachment: uploadedAttachment.url,
                    expDate: expDate,

                }
        }},
        { new: true }
      ).select('-password');
  
      userNote = { ...userNote, ...createNote._doc };
  
      // If there's an attachment, upload it to Cloudinary and update the user note
    //   if (attachment) {
    //     const uploadedAttachment = await uploadOnCloudinary(attachment.path);
        
    //     const attachmentUpdate = await User.findByIdAndUpdate(
    //       req.user._id,
    //       { 
    //         $push: { 
    //             "notesWithDetails.notes": {
    //             attachment: uploadedAttachment.url 
    //         }
    //         } }, // Save the Cloudinary URL
    //       { new: true }
    //     ).select('-password');
  
    //     userNote = { ...userNote, ...attachmentUpdate._doc };
    //   }
  
      // Respond with success and the updated note
      return res.status(200).json({ message: 'Profile updated successfully', userNote });
  
    } catch (error) {
      console.error('Error updating profile:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  
export { registerUser, 
    loginUser, 
    logoutUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateAccountDetails, 
    updateUserAvatar, 
    updateUserCoverImage, updateProfile, dashboard   };
