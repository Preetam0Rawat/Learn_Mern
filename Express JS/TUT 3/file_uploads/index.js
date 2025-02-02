const express = require('express')
const path = require('path')             //For binding ejs file here
const multer  = require('multer')
//This multer upload is causing file corruption so using multer.diskStorage instead
//const upload = multer({ dest: 'uploads/' })    //uploads folder will be automatically created store the uploaded file

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return  cb(null, './uploads')              //File location        //return is returning file location to multer
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)  + file.originalname  //generating filenmae in this way so that new file don't overwrite hte previous one
      return cb(null, file.fieldname + '-' + uniqueSuffix)              ///return is returning file name to  multer
    }
  
})
const upload = multer({ storage: storage })


const app = express()
const PORT = 8000

app.set("view engine", "ejs")       //Templating engine used to render dynamic content(HTML content) on server side
app.set("views", path.resolve("./views"))   //Locate the ejs fil'e directory

app.get("/", (req , res )=>{
      return res.render("homepage")
})

app.post("/upload", upload.single('avatar'), (req, res) =>{                                     
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/")    
})
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))