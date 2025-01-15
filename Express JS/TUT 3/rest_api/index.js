//Part 1
// const express = require("express")
// // const http = require("http")         //1

// const app =express()


// app.get('/', (req, res)=>{
//     return res.send("Welcome to  homepage ;)")
// })

// app.get('/about', (req, res)=>{
//     return res.send("Welcome to about page ;)")
// })

// app.get('/contactus', (req, res)=>{
//     return res.send("Welcome to contact us page ;)")
// })

// // const myServer = http.createServer(app)     //2

// // myServer.listen(8000, ()=>console.log("Server is running succuessfully"))   //3


// // With express there is not need to write 1,2,3, just use

// app.listen(8000, ()=>console.log("Server is running succuessfully"))



//Part2


const users = require("./MOCK_DATA.json")
const express = require("express")
const app = express()
const PORT = 8000

const fs = require("fs")

app.use(express.urlencoded({extended : false}))                       // middleware


//Creating our own middleware

app.use((req, res, next)=>{
    console.log("middleware 1");
    next()
})

app.use((req, res, next)=>{
    console.log("middleware 2");
    next()
})

app.get('/user', (req, res)=>{
       return  res.json(users)
})

app.get('/user/:id', (req, res)=>{
    const id = Number(req.params.id)
    const user = users.find(user=>user.id === id)
        if(!user) return res.json("user not found")
    return  res.json(user)

})

app.post('/user',(req, res)=>{
    const body = req.body;
    users.push({id : users.length+1, ...body})
    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, response)=>{
       if(err){ 
        console.log(err);
       }
        else{
          return res.json({status : "successfully posted"})
        } 
    })
})

app.patch('/user/:id',(req, res)=>{
    const id = Number(req.params.id)
    const updatedBody = req.body;
    const index = users.findIndex(user => user.id === id)

    // findind index is neccessary when id and index may not be same
    if(index === -1) return res.json({error : "user doesn't exist"})


        //Spread operator is very important
    users[index] = {...users[index], ...updatedBody}
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, response)=>{
       if(err){ 
        console.log(err);
       }
        else{
          return res.json({status : "successfully patched"})
        } 
    })
})


app.delete('/user/:id',(req, res)=>{
    const id = Number(req.params.id)
    const index = users.findIndex(user => user.id === id)
 
    if(index === -1) return res.json({error : "user doesn't exist"})

    users.splice(index, 1)

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, response)=>{
               if(err){ 
                   console.log(err);
               }
                else{
                  return res.json({status : "successfully deleted"})
                } 
    })
})

app.listen(PORT, ()=> console.log("Server running"))