let budget = prompt("Enter your budget: ");

console.log("Your budget is: " + budget);
if (budget>=10000){
    console.log("You can buy the premium product")
}
else if (budget>=5000){
    console.log("You can buy the intermediate product")
}

else() => {
    console.log("You cannot buy this product")
}

let number = prompt("Enter a number: ");

if (number%2==0){
    console.log("Given number is divisible by 2");
    if(number%3==0){
        console.log("Given number is divisible by 6")

    }
    else()=>{
        console.log("Given number is not divisible by 3")
    }
}
else()=>{
    console.log("Given number is not divisible by 2");
}