function sum(a, b) {
    console.log("hello"); //this hello print 
    return a+b ;
    console.log("hello"); //this hello not print
}

console.log(sum(3, 5));

//Practice question 
//Create a function that returns the sum of mumbers from 1 to n.
function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
} 

