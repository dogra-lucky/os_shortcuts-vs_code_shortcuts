/* const obj = { a: 1, b: 2, c: 3 };
obj.__proto__.getB = function () {
  console.log("value of B is ", this.b);
};
obj.getB(); */

// prototypes for classes in javascript
/* class One {
  #a = 34; // # make the class property private and if we try to access it outside class then it will return undefined
  #b = 55;
  c = 490;
}
const One_obj = new One();
One.prototype.getC = function () {
  console.log("value of the property c is ", this.c);
};
One_obj.getC(); */

// getters and setters in javascript objects

/* var person = {
  _name: "John",
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },
};
console.log(person.name);
person.name = "alice";
console.log(person.name); */

//custom getters and setters

/* let person = {
  name: "foo",
  setFoo: function (newName) {
    return (this.name = newName);
  },
  getFoo: function () {
    return this.name;
  },
};
console.log(person.name);
person.setFoo("bar");
console.log(person.getFoo()); */
