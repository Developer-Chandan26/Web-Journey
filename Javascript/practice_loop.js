const favMovie = "Avtar";
let guess = prompt("guess a favMovie");

while ((guess != favMovie) && (guess != "quit")) {
  guess = prompt("Wrong guess. please try again");
}
if(guess == favMovie){
    console.log("Congrats!");
}
else{
    console.log("you quit");
}