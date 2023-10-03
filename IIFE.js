//Immediately invoked function expression
//Only executed once
//Useful for initialization of libraries

(function(){     //this function must be given a name but we bypass it by making it an expression by enclosing it in parenthesis and then calling it immediately with another set of parenthesis
    console.log("This will only be executed once")
})()

/*
(function(name){
    console.log(`Hi ${name}`)
})("Soham")
*/