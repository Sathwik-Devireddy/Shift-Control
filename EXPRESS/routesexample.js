const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("hey waz up")
})
app.get("/kungfu",(req,res)=>{

    const products = [
        {id:1,
            label:'product 1'
        },
        {id:2,
            label:'product 2'
        },
        {id:3,
            label:'product 3'
        },
    ]
    res.json(products)
})
app.get("/product/:id",(req,res)=>{
    const pId = parseInt(req.params.id)
    const products = [
        {id:1,
            label:'product 1'
        },
        {id:2,
            label:'product 2'
        },
        {id:3,
            label:'product 3'
        },
    ]
    const single = products.find(product =>product.id == pId)
    if(single){
        res.json(single)
    }else{
        res.status(404).send("not found mate")
    }
})
port = 3000
app.listen(port,()=>{
    console.log("server running roo")
})