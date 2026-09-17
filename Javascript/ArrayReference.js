let arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1);

let arr2 = ['e', 'f', 'g', 'h'];
console.log(arr2);
console.log(arr1 === arr2); //false

//const array we can push, pop, shift, unshift, but we can't change array's reference.
const fruits = [];
fruits.push("banana", "apple", "orange");
console.log(fruits.length); // 3

//Nested array
let nums = [ [1,2], [3,4], [4,5], [5,6] ];
console.log(nums);

//Practice Questions
//Create a nested array to show the following tic-tac-toe game state.
let game = [ ['x', 'null', 'o'], ['null', 'x', 'null'], ['o', 'null', 'x'] ];
console.log(game);