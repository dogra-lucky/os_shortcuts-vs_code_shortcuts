const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
require("./helpers/init_db");
app.use("/", (req, res) => {
  res.send("welcome to project");
});
app.listen(5999, () => {
  console.log("app running at port 5999");
});
