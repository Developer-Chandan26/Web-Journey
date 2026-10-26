//Event Bubbling
let container = document.querySelector("#Container");
let div2 = document.querySelector("#div2");
let btn = document.querySelector("#btn");

container.addEventListener("click", function () {
  console.log("Cointainer is Clicked");
});

div2.addEventListener("click", function (Event) {
  event.stopPropagation(); //tis is stop the bubbling
  console.log("div2 is Clicked");
});

btn.addEventListener("click", function (event) {
  event.stopPropagation(); //tis is stop the bubbling
  console.log("Button is Clicked");
});
