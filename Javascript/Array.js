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

//indexOf method & includes method
let color = ["red", "blue", "orange", "voilet", "purple"];
console.log(color.indexOf("voilet"));

//concet methods and reverse method
let primaryColor = ["red", "blue", "orange", "green"];
let secondaryColor = ["voilet", "purple", "orange"];
console.log(primaryColor.concat(secondaryColor));
console.log(primaryColor.reverse());
console.log(secondaryColor.reverse());
console.log(secondaryColor.reverse()); //second reverse (It will be the same as it was in the second reverse.)

//Slice in Array Method
let fruit = ["orange", "mango", "banana", "grapes", "papaya", "litchi", "lamon"];
console.log(fruit.slice());
console.log(fruit.slice(1, 1, "car"));
console.log(fruit.splice(-2)); //last element 

//splice methods
console.log(fruit.splice(4)); //delete element
console.log(fruit.splice(2, 4)); //delete start
console.log(fruit.splice(0, 1, "litchi", "watermalon")); //add element

//short method
let pen = ["red", "blue", "orange", "black", "purple", "pink"];
console.log(pen.sort());

let num = ["37", "83","12","11", "45", "34", "100"];
console.log(num.sort()); //firstly sort method convert in string and than string base change 

//Practice Question
//Q1. For the given start state of an array, change it to final form using splice.
//start: ["january", "july", "march", "august"]
//end: ["july", "june", "march", "august"]

let month = ["january", "july", "march", "august"];
console.log(month.splice(0, 2, "july", "june"));
console.log(month);

//Q2. Return the index of the "javascript" form the given array.
//it was reversed. ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"]

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"));
