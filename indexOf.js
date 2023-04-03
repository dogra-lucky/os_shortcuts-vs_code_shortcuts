// let arr1 = [1, 2, 3, 4, 10];
// let arr2 = [5, 5, 10, 20];
// let arr3 = new Set([...arr1, ...arr2]);
// console.log(arr3);
// const arr1 = [1, 2, 3, 4];
// let arr2 = ["hello", "good"];
// let ins = arr1.reduce((accumulator, currentValue) => {
//   console.log(">>>>.acc", accumulator, "currr????????///", currentValue);
//   return accumulator + currentValue;
// });
// console.log(ins);
// let obj = { a: { b: 12 } };
// console.log(obj);
// let {
//   a: { b },
// } = obj;
// // b = 34;
// console.log(b);
// console.log(obj);
// const cusError = new Error("custom error");
// console.log(cusError);
// throw new Error("custom error");
// function myFunction() {
//   const myError = new Error("This is a custom error message");
//   myError.name = "CustomError";
//   return myError;
// }

// const errorObject = myFunction();
// console.log(errorObject.stack); // Output: "CustomError"
// console.log(errorObject.message); // Output: "This is a custom error message"
// const st = new Set([3, 5, 6, 67, 42]);
// for (let s of st) {
//   console.log(s);
// }
// st.add(333);
// console.log(st);
// st.delete(5);
// console.log(st);
// let str = "hello world";
// let buf = Buffer.from(str);
// console.log(str);
// console.log(buf);
// const arr = [34, 567, "5c"];
// console.log(Buffer.from(arr[2]).toString("utf8"));
// const fs = require("fs");
// const { Readable } = require("stream");
// let str = "chandigarh is also known as city beautiful";
// const stream = Readable.from(str, { highWaterMark: 200 });
// stream.on("data", function (data) {
//   console.log(data, "@@@");
// });
// console.log(stream);
// const cluster = require("cluster");
// console.log("##", cluster);
// const worker = require("node:worker_threads");
// console.log(worker);
const arrBuff = new ArrayBuffer(8);
console.log(arrBuff.slice(2));
