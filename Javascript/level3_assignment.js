//Q1. Write a JavaScript program to get the first n elements of an array. [ n can be any positive number].
//for example: for array [7, 9, 0, -2] and n = 3 , print [7, 9, 0]

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0, n);
console.log(ans);

//Q2. Write a javascript program to get the last n elements of an array. [ n can be any positive number].
//for example: for array [7, 9, 0, -2] and j = 3, print [9, 0, -2]
let arr1 = [7, 9, 0, -2];
let j = 3;
let final = arr.slice(arr1.length - n);
console.log(final);

//Q3. Write a javascript program to check whether a string is blank or not.
let str = prompt("enter your string");
if(str.length == 0) {
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

