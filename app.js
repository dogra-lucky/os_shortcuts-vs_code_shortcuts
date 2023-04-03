const { urlencoded, json } = require("express");
const express = require("express");
const { connect } = require("./update");
const app = express();

connect();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", (req, res) => {});
app.listen(7777, () => {
  console.log("connected at 7777");
});
