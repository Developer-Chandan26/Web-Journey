let sum = 54; //Global function bahar use hota hai

function calSum(a, b) {
  let sum = a + b; //function scope ander use hota hai
  console.log(sum);
}

calSum(1, 2);
console.log(sum);

//Black Scope
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//console.log(a); //call karte samay bahar nahi ander karna hota hai

//Lexical Scope
 function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    innerFunc();
    
}

//What will be the output?
let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();