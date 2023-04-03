// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { ...obj1 };
// console.log(obj2.c);
// obj2.c = 99;
// console.log(obj1.c);
// console.log(obj2.c);

// const { stat } = require("fs");

// const obj1 = { a: 1, b: 2, c: 3 };
// // const obj2 = Object.assign({}, obj1);
// const obj2 = obj1;
// // console.log(obj2.c);
// // obj2.c = 99;
// // console.log(obj1.c);
// console.log(obj2 == obj1);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1];
// console.log(JSON.stringify(arr2) == JSON.stringify(arr1));
// let stats = require("fs").Stats;
// console.log(">>>", Stats("./one.js"));

// fs.stat("./one.js", (err, info) => {
//   err ? "" : console.log(info);
// });
/*stat("./two.js", (err, info) => {
  !err ? console.log(info) : "";
});
*/
// process.stdin.resume();
// process.on("SIGINT", () => {
//   console.log("control + c is pressed");
//   process.exit();
// });
