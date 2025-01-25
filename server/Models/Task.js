import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    status: {
        type:String,
        enum:['pending','finished'],
        default: 'pending',
        required:true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    priority:{
        type:Number,
        required:true,
        min:1,
        max:5,
    }

}, { timestamps: true })

export const Task = mongoose.model("Task", taskSchema)