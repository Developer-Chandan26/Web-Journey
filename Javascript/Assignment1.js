//Q1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 100;

if (num % 10 == 0) {
  console.log("good value");
} else {
  console.log("it is bad value");
}

//Q2. Take the user's name & age as input using prompts.
// Than return back the following statement to the user as an alert (by substituting
//their name & age):
let name = prompt("please enter your name");
let age = prompt("please enter your age");

alert("${name} is ${age} years onload.");

//Q3. Write a switch statement to print the months in a quarter
//Months in Quarter 1 : January, February, March
//Months in Quarter 2 : April, May, June
//Months in Quarter 3 : July, August, September
//Months in Quarter 4 : October, November, December
//[Use the number as the case value in switch]
let quarter = 2;

switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("not a quarter!");
}
