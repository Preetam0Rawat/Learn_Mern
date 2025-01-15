const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.urlencoded({extended: false}))

//connect
mongoose.connect('mongodb+srv://Preetam:zOEAeScPU2HVY8Jb@cluster0.u7r6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("Connection to mongodb successful"))
.catch((error)=> console.log("Error : failed to connect to mongodb" ,error))


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

//post request to create a user
app.post('/user', async(req, res)=>{
    const body = req.body;
    console.log(body)

    const userCreate = await User.create({          //User is the model name
            firstName : body.firstName,
            lastName : body.lastName,
            email : body.email,
            gender : body.gender
    })

    return res.status(201).json({message : "User created successfully"})
})

//get request to get all users in database
app.get('/user', async(req, res)=>{
        const allUsers = await User.find({})

        return res.status(200).json(allUsers)
})


//get user by id
app.get('/user/:id', async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    const singleUser = await User.findById(id)

    if(!singleUser)  return res.status(404).json({mssg : "User not found"})
    
    return res.status(200).json(singleUser)
})

//delete user
app.delete('/user/:id',async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    await User.findByIdAndDelete(id)
    return res.status(200).json({mssg : "User deleted sucessfully"})
} )


//Update user
app.patch('/user/:id', async(req, res)=>{
    const id = req.params.id                             //didn't convert in number
    await User.findByIdAndUpdate(id, {lastName : "Negi"})    // other way would have been sending updated body from post man and than update
    return res.status(200).json({mssg : "User updated sucessfully"})
  
})




app.listen(8000, ()=> console.log("Server running"))

