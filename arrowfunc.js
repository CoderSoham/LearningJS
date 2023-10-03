/*Introduced in ES6
Faster to write functions as function keyword is negated
No need to use parenthesis in case of single parameter
No need to use {} for single line of code in function
No need to use return statement for single line of code in function
*/
let greet = name =>{
    name = prompt("Enter your name: ");
    console.log("Hello" , name);
}

greet();