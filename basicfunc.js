//Functions are useful for structuring code and code reusability

//Declaration:
function name(parameters){ //It is called parameter only during declaration
                            //Values inserted inside function are called arguement
}

//Example:
function add(a,b){
    let c = a+b;
    console.log("Addition of numbers is",c);
}

add(5,10)

//Anonymous function:
let func = function(){  //Allows function to be assigned to a variable

}

//While giving arguements, if none are given it will automatically convert to undefined
//To avoid this we can give a default value inside function declaration

function greet(name = "defaultName"){
    console.log("Hello,",name);
}

greet();
greet("Soham")

let age = function(birthYear){
    let a = 2023 - Number(birthYear);
    console.log("Your current age is " + a);
}

