const student = {
    name: "Chandan",
    age: 20,
    marks: 95.4
};
console.log(student);

const item = {
    price: 100,
    discount: 50,
    colors: ["red", "green"]
};
console.log(item);

//how to access value
//post["discount"];

//Add/update value/delete value

//add new value
item.quality = "good";

//update value
item.discount = 60;

//delete value
delete item.colors;
console.log(item);