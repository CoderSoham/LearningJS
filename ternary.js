//Ternary Operator (? :)

let age = prompt("Enter your age: ");  //Normal if else condition
if (age>=18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote")
}

let eligibility= age>=21 ? "Eligible for marriage" : "Not eligible for marriage" ;    //Single condition
console.log(eligibility);  

let Eligibility= age>=18 ? age>=21 ? "Eligible for Voting and Marriage" : "Not eligible for marriage but eligible for voting" : "Not eligible for voting or for marriage";   //Multiple conditions
console.log(Eligibility);
