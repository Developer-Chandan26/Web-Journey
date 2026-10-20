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
let value = [1, 2, 3, 4, 5];

let finalValue = value.reduce((acc, value) => {
    return acc + value;
}, 0);
console.log(finalValue);

//Find the maximum value
let max = [1, 2, 3, 4, 5 ,1, 5, 7, 8];

let maxResult = max.reduce( (max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(maxResult);

//Practice Question
//Create a function to find the min number in an Array.
let min = [2, 3, 5, 1, 5, 6, 7,];

let minResult = min.reduce( (min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(minResult);

//Check id all numbers in ours array are multiples of 10 or not.
let multiples = [20, 30, 50, 5];

let ans = multiples.every((el) => el % 10 === 0);

console.log(ans);
