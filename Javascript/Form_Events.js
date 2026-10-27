//form Events
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //alert("form Submitted");
  //Extracting form Data
  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your passward is set to ${pass.value}`);

  //console.dir(inp.value); input me innertext dekhne ke liye valve ko use karte hai
});
