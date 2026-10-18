console.log("Login in..."); //Immediatly print hoga

setTimeout(() => {
    console.log("Login Successful! "); //(Callback ko kam se kam 6 seconds baad execute hone ke liye schedule karta hai.)
}, 6000);

console.log("Explore"); //Immediatly print hoga

//Cancelling a Timer 
console.log("login successful");  
let timer = setTimeout(() => {
    console.log("login");
}, 5000);

clearTimeout(timer);


//Set Interval & Clear intervel
let count = 1;

let digit = setInterval(() => { //this is set interval
    console.log(count);
    count++ ;

    if (count > 5) {
        clearInterval(digit); // the counter stop after printing 5 because clearInterval() cancels the repeating timer
    }
}, 2000);