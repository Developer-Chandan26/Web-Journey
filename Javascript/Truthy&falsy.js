if ("true") {
  console.log("it has true value");
} 
else {
  console.log("it has a false value");
}

if (" ") {
  console.log("string is not empty");
} 
else {
  console.log("string is empty");
}

//Switch Statement
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    //break;

  case "yellow":
    console.log("slow dowm");
    //break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Light is broken");
}
