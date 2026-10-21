//getElementById() in selecting elements
let heading = document.getElementById("heading"); //Selects an HTML element using its unique id.

console.log(heading);

//getElementsByClassName() -> Selects all HTML elements that have a specified class name.
let box = document.getElementsByClassName("box");

console.log(box);
console.log(box[0]);

//getElementsByTagName() -> Selects all HTML elements with a specified tag name.
let paragraph = document.getElementsByTagName("p");

console.log(paragraph);
console.log(paragraph[0]);
console.log(paragraph[1]);

//querySelector() -> Selects the first element that matches a specified CSS selector.
let heading4 = document.querySelector("#heading4"); // Use # to select an ID.
console.log(heading4);

let creation = document.querySelector(".creation"); //Use . to select a class.
console.log(creation);

let para = document.querySelector("p"); //Use a tag name directly to select by tag.
console.log(paragraph);

//querySelectorAll() -> elects all elements that match a specified CSS selector.
let images = document.querySelectorAll(".images"); //Returns a static NodeList.
console.log(images); //Returns an empty NodeList if no match is found.
console.log(images[0]);

//Chanding content

