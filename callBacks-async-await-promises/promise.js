function delay(time){
   return new Promise((resolve)=>setTimeout(resolve,time))
}
console.log("Start")
delay(2000).then(()=>{
    console.log("2 sec delay")
})
console.log("end")
function divide(n1,n2){
    return new Promise((resolve,reject)=>{
        if(n2==0){
            reject("not divisible")
        }else{
            resolve(n1/n2)
        }
    })
}
divide(10,4).then((result)=>console.log(result)).catch((error)=>console.log(error))

//without timeout
function divide(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n2 === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(n1 / n2);
        }
    });
}

function multiply(n1, n2) {
    return new Promise((resolve, reject) => {
        resolve(n1 * n2);
    });
}

console.log("Start");

divide(10, 2)
    .then((result) => {
        console.log("Division:", result);
    })
    .catch((error) => {
        console.log(error);
    });

multiply(10, 5)
    .then((result) => {
        console.log("Multiplication:", result);
    });

console.log("End");