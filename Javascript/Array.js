//before
let student1 = "Chandan";
let student2 = "Abhishek";
let student3 = "Aman";

//after
let student = ["Chandan", "Abhishek", "Aman"];
let marks = [99, 87, 48, 48, 32];
let info = ["Aman", 25, 6.2]; //mixed array
let empArray = []; // empty array

//Array Method
//push method
let cars = ["audi", "maruti", "BMW", "toyota"];
cars.push("xuv");
cars.push("farrari");

//pop method
cars.pop("farrari"); //cars.pop()

//unshift method
cars.unshift("thar"); //cars.unshift() for delete 

//shift
cars.shift("thar");
cars.shift("BMW");

//Practice Question
//Q1. For the given start state of an array, change it to final form using methods.
// start: ['January', 'july', 'march','august'];
//final: ['july', 'june', 'march', 'august'];
let months = ["january", "july", "march", "august"];
console.log(months);

months.shift("january");
console.log(months);

months.shift("july");
console.log(months);

months.unshift("june");
console.log(months);

months.unshift("july");
console.log(months);
