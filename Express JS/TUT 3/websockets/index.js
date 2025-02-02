const express = require("express")
const http = require("http")
const path = require("path")
const {Server} = require("socket.io")     //This server is capital

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket)=>{            //socket is coming from front end, io.on is executed everytime a new client joins
    // console.log("New user connected")
    socket.on("CM", (mssg)=>{   
        // console.log("Server message is", mssg)     //server recieved messsage
        io.emit("SM", mssg)                           //server sending messages to all clients
    })
})

app.use(express.static(path.resolve("./public")))
app.get('/', (req, res )=>{
    return res.sendFile("/public/index.html")
})

server.listen(8000, ()=> console.log("Server running on port 8000"))
