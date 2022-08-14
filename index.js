
const http=require("http")

const fs=require("fs")

// const fsPromises = require('fs/promises');

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        // res.end("localhost 3000 naamak server create hogaya bhoii!")
       
        res.end("<h1>You are on Home Page</h1><h3>To read the file asynchronously add /readasync at the end of URL</h3><h3>If You want to read the file synchronuously then add /readsync at the end of URL</h3>")
    }
  else if(req.url==="/readsync"){

     const data=fs.readFileSync("text.txt")
     res.write(data)
     res.end()
  }

  else if(req.url==="/readasync"){
fs.promises.readFile("text.txt","utf8")
.then((data)=>{res.write(data);res.end()})
.catch((err)=>res.end("something went wrong"))
  }
// fs.readFile("text.txt", 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   res.write(data)
//   res.end()
// })
  
  else{
    res.writeHead(404,{"Content-type":"html"})
    res.end("<h1>OOps! something went wrong</h1>")
  }
 
})


server.listen(8000,()=>{console.log("localhost")})


