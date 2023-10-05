//Hoisting is a unique feature of JS which seperates it from other scripting languages as it hoists the variable on top of the function that calls it but does not give it a value. This
//JS will give the value of that variable as undefined whereas other scripting languages will give an error
//This can happen only using the var keyword
console.log("The number is: ",number); //here it just uses the var name
var number = 10;

console.log("The number is: ",number); //here it has access to the value too

//Normal functions can use hoisiting but arrow functions cannot 

hoist();
function hoist(){
    console.log("This function is hoisted");
}