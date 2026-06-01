const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("hey waz up")
})
port = 4321
app.listen(port,()=>{
    console.log("server running")
})