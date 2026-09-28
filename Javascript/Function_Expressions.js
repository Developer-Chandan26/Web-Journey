 const name = "Chandan";

const sum = function(a, b) {
    console.log("sum");
    return a+b;  
 };
 console.log(sum(2, 3));



//direct console.log se  greet()→ function execute → console.log("good morning") → good morning
 const greet = function() { //Yahan function khud hi console par print kar raha hai.
    console.log("Good morning"); //greet ke ander function stored hai 
 }
 
 greet();


 //return wala pahale greet() ko call karta hai  → function execute  → return "good morning"  → console.log() us returned value ko print karta hai
 const yourName = function() {
    return "Hello Chandan!";
};

console.log(yourName());