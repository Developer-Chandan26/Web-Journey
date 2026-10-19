//Step 1: User order place karta hai
const customer = {
  name: "chandan",
  product: "Leptop",

  placeOrder: function () {
    console.log("Processing your order.........");

    //Step 2: Timer start hota hai
    setTimeout(() => {
      console.log(
        `Thank you ${this.name}! Your ${this.product} order is confirmed.`,
      );
    }, 5000);
  },
};

//Step 3: Arrow function this inherit karta hai
customer.placeOrder();

//Practice Question
//Write an arrow function that returns the square of a number ''n.
const square = (n) => n * n;

console.log(square(5));
console.log(square(45));
console.log(square(4));
console.log(square(25));

//Write a function that prints "Hello World" 5 thimes at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run")
}, 10000);
