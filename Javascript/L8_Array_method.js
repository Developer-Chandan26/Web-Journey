//forEach Method
let arr = [
    {
        name: "chandan",
        marks: "99"
    },
    {
        name: "Aman",
        marks: "96"
    },
    {
        name: "Mandy",
        marks: "88"
    },
];

arr.forEach((student) => {
    console.log(student.marks);
});

//Map Method
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);

//Filter method
