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

//Changing content with textContent
let about = document.querySelector("#about");

about.textContent = "Hello Sandy!";

//Changing content with inner text
let spider = document.querySelector("b");

spider.innerText = "Iron man";

//Change content with innerHTML
let boxLink = document.querySelector("ul a");

boxLink.innerHTML = "Author";

//Change content with value
let user = document.querySelector("#username");

user.value = "Sandy";

console.log(user.value);

//Attribute Manipulation
//getAttribute()
let marvel = document.querySelector("#marvel");

console.log(marvel.getAttribute("href"));
console.log(marvel.getAttribute("id"));

//setAttribute()
let mainImg = document.querySelector("#mainImg");

console.log(mainImg.setAttribute("alt", "Spider"));
console.log(mainImg.setAttribute("title", "Profile"));

//Check the updated attribute
console.log(mainImg.getAttribute("alt"));
console.log(mainImg.getAttribute("title"));

//hasAttribute()
let btn = document.querySelector("#btn");

console.log(btn.hasAttribute("disabled")); // true: The disabled attribute exists.
console.log(btn.hasAttribute("title")); // false: The title attribute does not exist.

//Changing commom attribute
//image source
let oldImg = document.querySelector(".oldImg");

console.log(oldImg.setAttribute("src", "assets/Rocket Racoon.jpg"));
console.log(oldImg.getAttribute("src"));

//changing link
let amazing = document.querySelector("#Azaming");

console.log(amazing.setAttribute("href", "https://www.youtube.com/"));
console.log(amazing.getAttribute("href"));

console.log(amazing.setAttribute("alt", "fantasy"));
console.log(amazing.getAttribute("alt"));

//Changing CSS Property
let hero = document.querySelector("h3");

console.log(hero.style.color =" red ");
console.log(hero.style.backgroundColor =" yellow ");
console.log(hero.style.fontSize =" 45px ");

//Manupulating Style using classlist

//classList.add()
let discription2 = document.querySelector("#discription2");

console.log(discription2.classList.add("highlight"));

//classList.toggle()
console.log(discription2.classList.toggle("hoghlight"));  // true
//console.log(discription2.classList.toggle("hoghlight")); -> callling second time the toggle is reversed -> false or true

//classList.contain()
console.log(discription2.classList.contains("highlight"));

//classList.replace()
console.log(discription2.classList.replace("highlight", "success"));

//classList.remove()
console.log(discription2.classList.remove("highlight"));

console.log(discription2.classList.contains("highlight"));
