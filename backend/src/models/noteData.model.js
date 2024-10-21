import mongoose, {Schema} from "mongoose";
import { sortUserPlugins } from "vite";

const noteDataSchema = new Schema(
    {
        noteId: {
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            index:true,
            trim: true
        },
        title: {
            type: String,
            required: true,
        },       
        noteData: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        expDate: {
            type: Number,
            dafault: 2
        },
        attachment: {
            type: String,
        }
    }
)
export const Note = mongoose.model("Note", noteDataSchema)