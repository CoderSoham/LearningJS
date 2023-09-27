let num1=100;
let num2=20;
console.log("Number 1 is", num1); // strings and num can be concatanated
console.log("Number 2 is", num2);
let quo = num1/2;
console.log("Quotient of the operation is" , quo);
let rem = num1%3;
console.log("Remainder of the operation is" ,rem);
let add= num1+num2;
console.log("Addition of the numbers is" ,add);
let sub = num1 - num2;
console.log("Subtraction of the numbers is" ,sub);
let mul = num1 * num2;
console.log("Addition of the numbers is" ,mul);
let pow = num1**2;
console.log("Number 1 raised to 2 is" ,pow);
let comp = num1*(num2/2 + 4) - 27 + 2**4
console.log("The complex solution is: " ,comp);
/*Rules of precedence
1. The operations between () is always computed first
2. * / % are computed with priority from left to right
3. + - are computed with priority from left to right */

//Loose equality ==
//Strict equality ===

let num = 4;
console.log(num == "4"); //Checks only value not datatype
console.log(num === "4"); //Checks both value and datatype

//Type conversion

let numstring = "10";
console.log(typeof numstring)
numNum = Number(numstring);
console.log(typeof numNum)