//Real world example 
let product = {
    name: "Leptop",
    price: 50000
};

//overwrite the price
let updatePrice = {
    ...product,
    price: 45000 //The spread operator copies the product properties, and the price is updated in the new object.
};
console.log(updatePrice);

//combining the arrays
let arr1 = ["50", "60", "45"];
let arr2 = ["70", "90"];

let result = [...arr1, ...arr2];
console.log(result);