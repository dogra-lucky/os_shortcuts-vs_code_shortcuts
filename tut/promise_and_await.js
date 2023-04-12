function foo() {
  console.log("?>>>>>>>>>>>>>>.>foo start");
  new Promise((resolve, reject) => {
    for (let index = 0; index < 20; index++) {}
    resolve();
  }).then(() => {
    console.log("foo promise ...........");
  });
  console.log(">>>>>>>>>..foo end");
}
async function bar() {
  console.log("???????????bar start ");
  let arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  await arr;
  //   for (let a of arr) {
  //     await a;
  //   }
  console.log("..........bar end");
}
foo();
bar();
