//forEach Method
let arr = [
    {
        name: "chandan",
        marks: "99"
    },
    {
        name: "Aman",
        marks: "96"
    },
    {
        name: "Mandy",
        marks: "88"
    },
];

arr.forEach((student) => {
    console.log(student.marks);
});

//Map Method
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);

//Filter method
let value =[3, 4, 2, 64, 5, 6, 3, 4, 55, 27];

let digit = value.filter((num) => {
    return num % 2 === 0;
});
console.log(digit);

//Every Method()

//Example 1: Check Every Number
let even = [2, 4, 6, 8, 10];

let final = even.every((even) => {
    return even % 2 === 0;
});
console.log(final);
//When add  number 5 is odd. Since not every number is even, the result is false.

//some() Method
//Check Whether Any Number Is Even 
let anyEven = [1, 3, 5, 8, 9];

let finalResult = anyEven.some((anyEven) => {
    return anyEven % 2 === 0;
});
console.log(finalResult); //true, the number is 8 is even
 