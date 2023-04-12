let time = 0;
console.log("program start ...........");
setTimeout(() => {
  console.log("inside set timeout..........");
}, time);

setImmediate(() => {
  console.log("inside set immediate..........");
});
async function foo() {
  let a;
  console.log("async start...........");
  await a;
  console.log("async end....");
}
foo();
Promise.resolve().then(() => {
  console.log("inside promiss,,,,,,,,,,");
});

console.log("program end..........");
