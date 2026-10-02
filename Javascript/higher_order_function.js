function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func(); //greet function ko call kar rahi hai
  }
}

let greet = function () {
  console.log("hello");
};
multipleGreet(greet, 500);

//Practice Question
function oddOrEvenFactory(request) {
  //Ye function request lega
  //ager odd request hai
  if (request == "odd") {

    let odd = function (n) {
      console.log(!(n % 2 == 0));
    };

    return odd;
  }

  //ager request even hai
  else if (request == "even") {

    let even = function (n) {
      console.log(n % 2 == 0);
    };

    return even;
  } else {
    console.log("wrong request");
  }
}

let request = "odd";
