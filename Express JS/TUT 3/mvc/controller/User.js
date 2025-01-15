const User = require("../models/User")

const getAllUsers = async(req, res)=>{
    const allUsers = await User.find({})

    return res.status(200).json(allUsers)
}


const getUserById = async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    const singleUser = await User.findById(id)

    if(!singleUser)  return res.status(404).json({mssg : "User not found"})
    
    return res.status(200).json(singleUser)
}

const deleteUser = async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    await User.findByIdAndDelete(id)
    return res.status(200).json({mssg : "User deleted sucessfully"})
} 

const updateUser = async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    await User.findByIdAndUpdate(id, {lastName : "Negi"})    // other way would have been sending updated body from post man and than update
    return res.status(200).json({mssg : "User updated sucessfully"})
  
}


const createUser = async(req, res)=>{
    const body = req.body;
    console.log(body)

    const userCreate = await User.create({          //User is the model name
            firstName : body.firstName,
            lastName : body.lastName,
            email : body.email,
            gender : body.gender
    })

    return res.status(201).json({message : "User created successfully"})
}

module.exports = {getAllUsers, getUserById, createUser, deleteUser, updateUser}