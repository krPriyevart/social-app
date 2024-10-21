import mongoose, {Schema} from "mongoose";

const noteIdSchema = new Schema(
    {
        noteId: [
            {
              type: Schema.Types.ObjectId,
              ref:"NoteData"  
            }
        ] 
    }
)

export const NoteId = mongoose.model("NoteId", noteIdSchema)