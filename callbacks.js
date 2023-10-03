//Passing function as an Arguement

let add = (a,b) =>{
    let c=a+b;
    return c
}

let sub = (a,b) =>{
    let c=a-b;
    return c
}

let arith = (a,b,func) =>{  //This is a higher order function as it passes another function in it's arguement as a function
    return func(a,b);
}

console.log(arith(15,10,sub))  