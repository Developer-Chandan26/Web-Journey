// Without default parameters
function greet(name) {
    console.log("hello " + name);
};
greet("Sandy"); // hello Sandy
greet(); //Undifined, Jab hum greet() call karte hain, tab name ki value provide nahi karte. Isliye name ki value undefined hoti hai.
greet(null); //null

//With Default Parameters
function  greet(name = "Guest") {
    console.log("Hello " + name);
};

greet("Sandy"); // Hello Sandy
greet() //Hello Guest, Ager argument is not provided "guest" value is take default

//Default Parameters with Multiple Arguments
function add(a = 0, b = 0) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5));    // 5
console.log(add());     // 0