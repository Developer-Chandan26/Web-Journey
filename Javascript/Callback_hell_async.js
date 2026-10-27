// // h1 = document.querySelector("h1");

// // function changeColor(color, delay, nextColorChange) {
// //   setTimeout(() => {
// //     h1.style.color = color;
// //     if (nextColorChange) nextColorChange();
// //   }, delay);
// // }

// // //This is callback nesting -> callback hell
// // changeColor("red", 1000, () => {
// //   changeColor("orange", 1000, () => {
// //     changeColor("green", 1000, () => {
// //         changeColor("pink", 1000, () => {
// //             changeColor("gold", 1000);
// //         });
// //     });
// //   });
// // });

// //callback hell
// // function savetoDb(data, success, failure) {
// //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //   if (internetSpeed > 4) {
// //     success();
// //   } else {
// //     failure();
// //   }
// // }

// // savetoDb(
// //   "Chandan",
// //   () => {
// //     //calback hell
// //     console.log(" success : Your data was saved ");
// //     savetoDb(
// //       "Welcome",
// //       () => {
// //         //callback hell
// //         console.log("success2 : data2 saved");
// //         savetoDb(
// //           "sandy",
// //           () => {
// //             //callback hell
// //             console.log("success3 : data3 saved");
// //           },
// //           () => {
// //             //callback hell
// //             console.log("failure2 : weak connection");
// //           },
// //         );
// //       },
// //       () => {
// //         //callback hell
// //         console.log("failure2 : weak connection");
// //       },
// //     );
// //   },
// //   () => {
// //     console.log(" failure : weak connection. data not saved");
// //   },
// // );

// //Promises
// //resolve and reject
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data daved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

// //compect version
// //try and catch
// // savetoDb("Welcome to JS hell")
// //   .then(() => {
// //     console.log("promise was resolved");
// //   })
// //   .catch(() => {
// //     console.log("promise was rejected");
// //   });

// //promise ke ander
// //then() and catch() method = improved version
// // savetoDb("Welcome to JS hell")
// //   .then(() => {
// //     console.log("data saved");
// //     savetoDb("hello world").then(() => {
// //       console.log("data2 saved");
// //     });
// //   })
// //   .catch(() => {
// //     console.log("promise was rejected");
// //   });

// //improved ka improved version = promise chaining
// //and result & error in promises
// savetoDb("Welcome to JS hell")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise:", result);
//     return savetoDb("hello world");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise:", result);
//     return savetoDb("hello Sandy welcome to promise");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise:", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise:", error);
//   });

//async functon & await function
// async function greet() {
//   //throw "404 page not found";
//   return "Hello Sandy!";
// }
// greet()
// .then((result) => {
//   console.log("promise was resolved");
//   console.log("result was : ", result);
// })
// .catch((err) => {
//   console.log("promise was rejected with err : ", err);
// })

//await function
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
