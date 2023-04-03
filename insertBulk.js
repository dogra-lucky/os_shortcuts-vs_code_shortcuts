const mongoose = require("mongoose");
const fs = require("fs");
const fastCsv = require("fast-csv");
/*start code of csv parsing  */

/*end code of csv parsing*/

const userSchema = mongoose.Schema({
  user_Id: { type: String },
  first_name: String,
  last_name: String,
  gender: String,
  email: String,
  phone: String,
  d_o_b: String,
  job_title: [{ type: String }],
});
const userModel = mongoose.model("bulkInsert", userSchema);
let userArray = [];
mongoose.connect("mongodb:localhost:27017/bulkUser", () => {
  console.log("db connected ");
});
const main = async () => {};
const readStream = fs
  .createReadStream("./people.csv", "utf-8")
  .pipe(fastCsv.parse({ headers: true }))
  .on("error", (error) => console.log(error.message))
  .on("data", (data) => {
    const userInfo = {
      user_Id: data["User Id"],
      first_name: data["First Name"],
      last_name: data["Last Name"],
      gender: data["Sex"],
      email: data["Email"],
      phone: data["Phone"],
      d_o_b: data["Date of birth"],
      job_title: data["Job Title"],
    };
    userArray.push(userInfo);
  })
  .on("end", (rowCount) => {
    userModel.insertMany(userArray, function (err, documents) {
      console.time("DbInsertTime");
      if (err) {
        console.log(err);
      }
      console.timeEnd("DbInsertTime");
    });
    console.log(`${rowCount} posts have been successfully uploaded.`);
    return;
  });
