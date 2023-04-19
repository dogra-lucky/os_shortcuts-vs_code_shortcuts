const mongoose = require("mongoose");
const schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/bla")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const date = schema({ date: { type: Date } });
const md = mongoose.model("dt", date);
md.create({ date: new Date(2023, 1, 12) });
