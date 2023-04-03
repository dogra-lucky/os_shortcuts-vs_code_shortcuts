// let b = "2022-23";
// // console.log(a == b);
// let a = "2022-23";
// let date = new Date();
// const currentYear = date.getFullYear();
// let ab = `${currentYear - 1}-${currentYear.toString().substring(2, 4)}`;
// console.log(ab);
// console.log(parseInt(date.getFullYear().toString().substring(2, 4)) + 1);
function foo(name) {
  let reg = /^[a-zA-Z]+(?:[.\s]*[a-zA-Z]+)*$/;
  return reg.test(name);
}

console.log(foo("md. jot. ansari"));
