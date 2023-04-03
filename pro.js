class A {
  a = 5;
  setName(val) {
    this.a = val;
  }
}
A.prototype.get = function () {
  console.log(this, ">>>this");
  return this.a;
};
let obj = new A();
// console.log(obj.get());
obj.setName(45);
console.log(obj.get());
