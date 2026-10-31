//Example for event Listener
//click Event & dbl click
let btn = document.querySelector("#btn");

let message = document.querySelector("#message");

btn.addEventListener("dblclick", function() {
    message.textContent = "Button Clicked!";
});

//Mouseover Event
let btn2 = document.querySelector("#btn2");

let message2 = document.querySelector("#message");

btn2.addEventListener("mouseover", function() {
    message.textContent = "button 2 clicked!";
});

//keyboard Event
let btn3 = document.querySelector("#btn3");

let message3 = document.querySelector("#message");

document.addEventListener("keydown", function(event) {
    message3.textContent = "button 3 clicked";
});

//Input Event


