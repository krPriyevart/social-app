import { Router } from "express";
import { registerUser, 
    loginUser, logoutUser, 
    refreshAccessToken, getCurrentUser, updateProfile, dashboard  } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        { 
            name: "avatar",
            maxCount:1
        },
        { 
            name: "coverImage",
            maxCount:1
        }
]),registerUser);

router.route("/login").post(loginUser);
router.route("/dashboard").post(verifyJWT, upload.fields([
    { 
        name: "noteId",
        maxCount: 1
    },
    { 
        name: "title",
        maxCount: 1
    },
    { 
        name: "noteData",
        maxCount: 1
    },
    { 
        name: "expDate",
        maxCount: 1
    },
    { 
        name: "attachment",
        maxCount: 1
    }
]), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    dashboard(req, res);
});


router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);    

router.route("/userdasboard").post(verifyJWT, getCurrentUser);

router.route("/profile").post(verifyJWT, upload.fields([
    { 
        name: "avatar",
        maxCount:1
    },
    { 
        name: "coverImage",
        maxCount:1
    }
]), updateProfile );


export default router 