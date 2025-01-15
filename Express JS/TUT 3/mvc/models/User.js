const mongoose = require("mongoose")


// creating schema
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    }, 
    
    lastName : {
        type : String,
    }, 
   
    email : {
        type : String,
        required : true,
        unique : true
    }, 
    
    gender : {
        type : String,
        required : true,
    } 
})

// creating model for the coressponding schema
const User = mongoose.model("User", userSchema)    //User is the model name


module.exports = User