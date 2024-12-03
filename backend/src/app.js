import express from "express"
import cors from "cors"  
import cookieParser from "cookie-parser"
const app = express()

// app.use(cors({
//     origin: '*',
//     credentials: true
// }))

const allowedOrigins = [
    'http://localhost:5173', 
    'https://social-app-frontend-tan.vercel.app', 
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json({limit:"16KB"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//user routes
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter);
app.get("/", (req, res) => {
    res.json({data: "ok"});
});
app.get("/health", (req, res) =>{
    res.send("ok!!");
});
export default app 