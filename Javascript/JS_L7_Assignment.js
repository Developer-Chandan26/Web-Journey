//Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
//and returns the average of those numbers.
const arrayAverage = (arr) => { //create Arrow function
    let total = 0; //Total ko zero se start karna
    for (let number of arr) {  //Array ke numbers ko access karna
        total += number; 
    }
    return total / arr.length; //Average return karna
};

let arr = [1, 2, 3, 4, 5, 6]; //Function ko call karna
console.log(arrayAverage(arr));

//Qs2. What is the output of the following code :
const object = {
    message: 'Hello, Chandan!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);
