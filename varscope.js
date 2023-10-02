let num = 100;  //Global Scope
console.log("Value of num: " + num);

const amount = 200; //New const in Global scope
console.log("Value of amount: " + amount);

if(true){
    let num=40;  //Block Scope
    console.log("Value of num: " + num);

    const amount = 400;  //New const in block scope
    console.log("Value of amount: " + amount);

}

if(true){
    num=30;  //Using Global Scope and overwriting
    console.log("Value of num: " + num);
}

num = 50;  //Overwriting in Global Scope
console.log("Value of num: " + num);

//amount=100;  Const cannot be overwritten