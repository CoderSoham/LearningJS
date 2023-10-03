let greet = (msg) =>{
    return function(name){
        console.log(msg, name)  //greet function returns name function which holds arguements from both
    }
}
greet("Hello")("Soham")

//Another example

function mathOperation(operation) {
    if (operation === 'square') {
        return function(number) {
            return number * number;
        };
    } else if (operation === 'cube') {
        return function(number) {
            return number * number * number;
        };
    } else if (operation === 'double') {
        return function(number) {
            return number * 2;
        };
    } else {
        return function(number) {
            return 'Invalid operation';
        };
    }
}

const square = mathOperation('square');
const cube = mathOperation('cube');
const double = mathOperation('double');

console.log(square(7));    
console.log(cube(5));      
console.log(double(8));    
console.log(mathOperation('unknown')(4));