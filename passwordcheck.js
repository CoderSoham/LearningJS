let password = prompt("Enter your password: ");

// let i=0;
// if (password.length > 8) {
//     console.log("Password is of correct length")
// i++}
// else if (password.length <=8){
//     console.log("Password is too short")
// }

if (password.length > 8 && password.toLowerCase()!=password && password.includes("!","@","#","$","^","&","*","~")){
    console.log("Password is strong")
}
else{
    console.log("Use special characters / capital letter/ more characters to enhance password strength")
}

// if(password.toLowerCase()==password){
//     console.log("Use captial letters in password")
// }
// else()=>{
//     console.log("Password uses capital letters")
//     i++
// }

// if (i>=3){
//     console.log("Password is strong")
// }
// else()=>{
//     console.log("Password is weak, make suitable changes")
// }