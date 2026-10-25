let btn = document.querySelector("button");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");

//short form but not a different color
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

//long form but differnt color
//btn.addEventListener("click", function() {
   // console.dir(this.innerText);
   // this.style.backgroundColor = "red";
//});

//p.addEventListener("click", function() {
   // console.dir(this.innerText);
   // this.style.backgroundColor = "blue";
//});

//h3.addEventListener("click", function() {
  //  console.dir(this.innerText);
    //this.style.backgroundColor = "pink";
//});

//h1.addEventListener("click", function() {
  //  console.dir(this.innerText);
   // this.style.backgroundColor = "orange";
//});