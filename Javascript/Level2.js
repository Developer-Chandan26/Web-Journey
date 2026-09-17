//Trim Method
//let msg = "     he   llo       ";

//let password = prompt("set your password");
//console.log(password.trim());

//let str = "I Love Cod      ing                 ";

//console.log(str.trim());

//upper and lower case method
let name = "Chandan Prajapati";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

//string method with argument
//1. indexof
let msg = "I Love Coding";
console.log(msg.indexOf("Love"));

//CHAINING METHOD
let nick = "Chandan          ";
let newNick = nick.trim().toUpperCase();
console.log(newNick);

//Slice Method
let str ="Chandan";
//console.log(str.slice(0,5));
console.log(str.slice(4)); //str.lengh

//Replace Method

let cha = "I Love Coding";

console.log(cha.replace('I', 'We'));
console.log(cha.replace('L', 'D'));

//REPEATE METHOD
let fruit = "mango";

console.log(fruit.repeat(3));
