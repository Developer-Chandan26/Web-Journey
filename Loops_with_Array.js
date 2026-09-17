let fruits = ["Mango", "Apple", "Banana", "Litch", "Orange"];

for(let i=0; i<fruits.length; i=i+2) {
    console.log(i, fruits[i]);
}

//Nested loops with Nested Arrays
let heroes = [
    ["ironman", "spiderman", "superman" ],
    ["thor", "flash", "wonder women"]
]

for(let i=0; i<heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}
 