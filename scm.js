// const { Schema, model, connect, set } = require("mongoose");

// connect("mongodb://127.0.0.1:27017/bla", function () {
//   console.log("connected");
// });
// set("strictQuery", false);
// const user = new Schema({ uName: { type: String }, uPass: { type: String } });
// const u = model("use", user);
// user.pre("save", function () {
//   console.log("preeeeeeeeee");
// });
// const obj = new u({ uName: "foo", uPass: "bar" }).save(function (err, data) {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(data);
// });
