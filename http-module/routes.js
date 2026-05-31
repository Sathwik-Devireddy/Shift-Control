const http = require("http")
const port = 3000
const server = http.createServer((req,res)=>{
   const url=req.url;
   if(url =="/"){
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("Home pAge");
   }
   else if(url =="/abc"){
    res.end("another page")
   }
})
server.listen(port,()=>{
    console.log("route server running")
})