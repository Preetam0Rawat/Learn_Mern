const fs = require("fs")                    //Example of built-in modules

//Writing
//Asynchronus 
        //fs.writeFile("./hello.txt", "Hello Everyone", (err)=>console.log(err))

//Synchronus
        //fs.writeFileSync("./hello2.txt", "Hello, this is synchronus")


//Reading
//Asynchronus 
        // const result = fs.readFile('./hello.txt', 'utf-8', (err, result)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(result);
        //     }
        // })


//Synchronus
        // const result2 = fs.readFileSync('./hello2.txt', 'utf-8')
        // console.log(result2);



        /* Asynchronus is non-blocking function, runs at the last*/


//Appending
        fs.appendFileSync('./hello2.txt','\nappended text\n')


//Copying
        fs.cpSync('./hello2.txt','hello2_copy.txt')

