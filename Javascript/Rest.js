//Calculating Total Price
function calculateTotal(...prices) {
    let total = 0;

    for(let price of prices){
        total += price;
    }
    return total;
}
console.log(calculateTotal(100, 200, 300));

//rest with array Destructuring
let fruits = ["Apple", "Banana", "Grapes", "Orange"];

let [first, ...remaining] = fruits;

console.log(first); //first stores the first element
console.log(remaining); //...remaining collects all the remaing elements into an array.

//Rest with object Destricturing
let user = {
    name: "sandy",
    age: 25,
    city: "Lucknow"
};
let { name, ...otherDetails } = user;

console.log(name); //name stores the value of the name property.
console.log(otherDetails); //...otherDetails collects all the remaining properties into a new object.