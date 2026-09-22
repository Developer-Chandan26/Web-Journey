function nameInfo(name, age ) {
    console.log(`${name}'s age is ${age}.`);
}
nameInfo("Chandan", 20);
nameInfo("amit", 21);
//nameInfo("21") 

//create a function to add two number.
function add(a, b) {
    console.log(a+b);
}
add(121, 43123);
add(2221, 15523);
add(13341, 43124);

//create a function that gives us the average of 3 numbers.
function calAverage(a, b, c) {
    let avg =(a+b+c)/3;
    console.log(avg);
}
calAverage(2, 4, 6);

//create a function for print a table.
function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}
printTable(3);