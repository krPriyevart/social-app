import mongoose,{Schema} from "mongoose";
const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,    
        }
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password:{
            type:String
        }
    }
)
export const User = mongoose.model("User", userSchema)