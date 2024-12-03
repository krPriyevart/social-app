import express from "express"
import { Router } from "express";
import cors from "cors"  
import cookieParser from "cookie-parser"
const app = express()
const router = Router()
app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.json({limit:"16KB"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//user routes
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)
router.get("/", (req, res) => {
    res.send("ok");
});
router.get("/health", (req, res) =>{
    res.send("ok!!");
})
export default app 