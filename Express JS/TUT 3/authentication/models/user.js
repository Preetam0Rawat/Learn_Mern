import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type : String,
        required : true,
        maxlength : 12
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
}, {timestamps : true})     // timesatmp is used in databbse for createdAt and updatedAt information


export default mongoose.model("User", userSchema)