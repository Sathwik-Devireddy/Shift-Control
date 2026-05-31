const fs= require("fs")
function frog(name,callBackf){
    console.log(`Call BAck ${name}`)
    callBackf()
}
function camel(){
    console.log("hello")
    console.log(camel)
}
frog("ferrari",camel)
console.log("qwerty")
fs.readFile("input.txt","utf-8",(err,data)=>{
    console.log(data)
})