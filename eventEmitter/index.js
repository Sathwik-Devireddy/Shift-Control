const eventEmitter = require("events")
class customEventEmitter extends eventEmitter{
  constructor(){
    super();
    this.greeting = 'hello';

  }
  greet(name){
    this.emit('greeting',`${this.greeting},${name}`)
  }
}
 const mycustomEventEmitter = new customEventEmitter();
   mycustomEventEmitter.on("greeting",(input)=>{
    console.log(`Greeting event`,input)
   })
   mycustomEventEmitter.greet('napolean')