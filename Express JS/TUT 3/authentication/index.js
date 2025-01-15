//To load an ES module set "type" : "module" in package.json or use the .mjs extension
// The reuire() method uses CommonJS(CJS) module system
// The import, used in this file, uses ES Module (ESM)
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8000

//database connection
mongoose.connect("mongodb+srv://Preetam:zOEAeScPU2HVY8Jb@cluster0.u7r6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Database connection successful"))
.catch((error)=> console.log("Error occures while connecting", error))

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))