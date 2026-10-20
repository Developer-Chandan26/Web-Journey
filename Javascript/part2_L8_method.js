//Find a Number
let numbers = [10, 20, 30, 40, 50];

let result = numbers.find((num) => {
    return num > 25;
});
console.log(result);

//Using an Arrow function and when no element matches than output is undefined
let number = [1, 3, 5, 8, 10, 12];

let final = number.find(number => number % 2 === 0 );
console.log(final);

//Reduce() Method
