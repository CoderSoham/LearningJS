const now = new Date();
const date= now.getDate();
const month= now.getMonth();
const year= now.getYear();

let ageCalc = function(bYear,bMonth,bDate){
    bDate = Number(prompt("Enter your Birth Date"))
    bMonth = Number(prompt("Enter your Birth Month"))
    bYear = Number(prompt("Enter your Birth Year"))
    console.log("Your Birthday is on: " + bDate+ ":" + bMonth+ ":" + bYear)
    if(Number(bMonth<=month && bDate>=date)){
    let age = 2023 - Number(bYear)
    return age;  //After return statement the function ends
}else{
    age = 2023 - Number(bYear) - 1;
    return age; 
}

}

console.log("Your Age is " + ageCalc())