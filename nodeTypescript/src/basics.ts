
console.log("hello node js from ts");
//basic types
let isDone : Boolean = false
let num : Number = 9
let str : String = "hello"
let list: Array<Number> = [1,2,3]
let products :string[] = ["a","b","c"]
let any :Array<any> = ["a",1,true]
let x:undefined = undefined
let g:null = null
enum Color {Red,Green,Blue}
let c:Color = Color.Green
//tuple
let tup:[Number,String] = [1,"hello"]
//function
function add(x:number,y:number):number{
    return x + y
}
//interfaces,types
interface Person {
    name : string,
    age : number
}
let user : Person = {
    name : "Nataraj",
    age : 28
}