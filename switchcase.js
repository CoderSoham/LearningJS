let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c;
let op = Number(prompt("Enter the operation from 1 to 5"));

console.log("Entered numbers are: " + a + ", " + b)
switch(op){
    case 1:
    c = a+b;
    console.log("Addition of the numbers is: ", c)
    break;
    case 2:
    c = a-b;
    console.log("Difference of the numbers is: ", c)
    break;
    case 3:
    c = a*b;
    console.log("Product of the numbers is: ", c)
    break;
    case 4:
    c = a/b;
    console.log("Quotient of the numbers is: ", c)
    break;
    case 5:
    c = a%b;
    console.log("Remainder of the numbers is: ", c)
    break;
    default:
        console.log("Invalid Case");
}