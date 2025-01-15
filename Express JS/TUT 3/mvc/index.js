const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/User")
const { middleware1, middleware2, urlencodedMiddleware} = require("./middleware/mw")

const app = express()
//middleware -> middlewares will come inside middleware folder
app.use(urlencodedMiddleware)
app.use(middleware1)
app.use(middleware2)

//connect
mongoose.connect('mongodb+srv://Preetam:zOEAeScPU2HVY8Jb@cluster0.u7r6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("Connection to mongodb successful"))
.catch((error)=> console.log("Error : failed to connect to mongodb" ,error))


// creating schema  
        // -> moved to models/User.js


// Routes moved to routes/User.js
        // Req, res moved to controlle/User.js
   //routes
   app.use('/user', userRoutes)

app.listen(8000, ()=> console.log("Server running"))

