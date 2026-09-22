//User enter a max number & then tries to guess a random generated number between 1 to max.
const max = prompt("enter your max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the random number");

while(true) {
    // 1. Agar user Cancel daba de ya "quit" likhe
    if(guess == "quit") {
        console.log("user quit");
        break; // Loop stop karega
    }
    
    // 2. String ko Number mein convert karke compare karein
    if(guess == random) {
        console.log("You are right! your random number is", random);
        break; // Sahi guess karne par loop stop hoga!
    }



    else if(guess < random) {
        guess = prompt("Hint: your guess was too small. please try again"); //Hint
    }
    else {
        guess = prompt("Hint: your guess was to large. please try again");
    }

    //else{
        // 3. Galat guess par dobara prompt pucho
       // guess = prompt("your guess was wrong. Please try again");
    //}
    
}