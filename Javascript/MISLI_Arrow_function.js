//Simple syntex
const sum = (a , b) => {
    console.log(a + b);
};
sum(3 , 4);

//Simple Syntax
const greet = (name) => {
    console.log("Hello " + name);
};

greet("Sandy");

//Single Parameter
const square = n => {
    return n*n;
};
console.log(square(3));

//Single Parameter
const cube = n => {
    console.log(n*n*n);
};
cube(3);

//Multiple Parameters
const add = (a, b) => {
    return a + b;
};
//console.log(add(a + b)); // + → addition karta hai
console.log(add(3, 5));// , → arguments ko separate karta hai

//Implicit return in Arrow function 

  const multiply = (a , b) => a * b;

  console.log(multiply(5 , 3)); 

//Explicit return in Arrow function 

const subtract = (a , b) =>{
    return a - b;
};

console.log(subtract(10 , 4));