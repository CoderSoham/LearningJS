//setTimeOut: Run function once after specific interval of time
//setTimeout(func,delay,arg1,agr2..)
//setInterval: Run function repeatedly starting after interval of time
//setInterval(function,delay)

console.log("Start of the program");

function delayedFunction() {
    console.log("Delayed function is executed after 2000 milliseconds")
}
setTimeout(delayedFunction, 2000);

function greet(name){
    console.log(`Hello ${name}! How are you today?`)
}

setTimeout(greet, 3000,"Soham");

let i=0;

function count(){

    i++;
    console.log("Value of i is: " + i)
    if (i >= 20) {
    clearInterval(intervalId); 


    }
}

const intervalId = setInterval(count, 3000);