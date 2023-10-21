import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    info:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

export default mongoose.model('notes',notesSchema);