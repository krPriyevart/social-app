//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import app from "./app.js"
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error", error);
        throw error;
    });
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port : ${process.env.PORT}`); 
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed!!", err);
})










//  import mongoose from 'mongoose';
// import { DB_NAME } from "./constants.js";

// import express from 'express';
// const app = express();

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         // await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//         //     useNewUrlParser: true,
//         //     useUnifiedTopology: true,
//         // });
//         app.on("error",(error)=>{
//             console.log("error", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is running on ${process.env.PORT}`);
//         })
//     }
//     catch (error){
//         console.error("ERROR: connection failed", error);
//         throw error;
//     }
// })();