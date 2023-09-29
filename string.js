console.log("This is string operations");

let firstName = "Soham";
let lastName = "Boravke";
console.log(firstName,lastName) //This is used to concatanate the string

let fullName= `I am ${firstName} ${lastName}` // It can also be done this way
console.log(fullName)

let a = "Pro Coder"
console.log("I am "+ a.toLowerCase());   // Converts full text to lower case
console.log("I am " + a.toUpperCase());  // Converts full text to upper case
console.log(a.indexOf("r")) // Gives the position of that alphabet/word in the string
console.log(a.lastIndexOf("r")) // Gives last index of that alphabet/word in the string

let hobbies = "     coding gaming swimming basketball   "
console.log(hobbies)
let trimhobbies = hobbies.trim() //It trims the extra space on either side of the string but does not trim the space in the middle
console.log(trimhobbies)

console.log(lastName.slice(0,4)) //It gives the string after cutting it on the given starting and ending index ignoring the last alphabet
// This does not change the original string

let arrHobbies = trimhobbies.split(" ") //Converts the stirng to an array. The element in the bracket is used to create a split and is known as seperator
console.log(arrHobbies)