let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log("code =", event.code); //ArrowUp(U), ArrowDowm(D), ArrowLeft(L), ArrowRight(R)
  if (event.code == "ArrowUp") {
    console.log("Character Move Forward");
  } else if (event.code == "ArrowDown") {
    console.log("Character Move BackWard");
  } else if (event.code == "ArrowLeft") {
    console.log("Character Move Left");
  } else if (event.code == "ArrowRight") {
    console.log("Character Move Right");
  }
});

//console.log("key =", event.key);
//console.log("code =", event.code);
//console.log("Key was pressed");

//inp.addEventListener("keyup", function() {
//console.log("Key was pressed");
//});
