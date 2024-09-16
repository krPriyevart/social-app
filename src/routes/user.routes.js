import { Router } from "express";
import { registerUser, 
    loginUser, logoutUser, 
    refreshAccessToken, getCurrentUser, updateProfile  } from "../controllers/user.controllers.js";
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
]),registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/userdasboard").post(verifyJWT, getCurrentUser);
router.route("/profile").post(verifyJWT, updateProfile );

export default router 