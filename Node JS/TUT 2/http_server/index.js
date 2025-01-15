const http = require("http")
const url = require("url")
const PORT = 8000

const myServer = http.createServer((req, res)=>{
     console.log("Request recieved")
     
     // console.log(req.headers);        //1 getting headers
     
     // console.log(req.url)             //2 getting url
     // const myUrl = url.parse(req.url, true)
     // console.log(myUrl);
     
     // const urlObj =  {                //3 getting url in string format
     //      protocol : 'https',
     //      host : 'www.example.com',
     //      port :  '8000',
     //      pathname : '/about' ,
     //      search : '?param1=value1&param2=value2',
     // }
     // const urlString = url.format(urlObj)
     // console.log(urlString);


    switch(req.url){                    //4 different responses for different url requests 
     case '/':
          res.end('Homepage')
          break;
     case '/about':
          res.end('About page')
          break;
     case '/contactus':
          res.end('Contact Us')
          break;
     default:
          res.end('Incorrect URL')
    }

      // res.end("Respose sent")
})

myServer.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})