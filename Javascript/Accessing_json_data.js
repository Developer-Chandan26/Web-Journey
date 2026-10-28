//Accessing data from APIs
let jsonRes =
  '{"fact": "Approxmatly 1/3 of cat owners think their pets are able to read their minds.","lenght":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);

//Provide data from user
let student = {
  name: "Sandy",
  marks: "98",
  age: "78",
  city: "Narak Lok",
};
//call -> JSON.stringify(student);