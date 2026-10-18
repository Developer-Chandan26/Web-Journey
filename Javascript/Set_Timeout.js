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