const mongoose = require("mongoose");
const schema = mongoose.Schema;
mongoose.set("strictQuery", true);
const connect = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/updateDB", (err, data) => {
      if (!err) {
        console.log(`mongodb connected `);
      } else {
        console.log(err.message);
      }
    });
  } catch (error) {
    console.log(`mongoose  error encountered at  ${error.message}`);
  }
};
const upSchema = new schema({ u_name: String, u_gender: String });
const up = mongoose.model("up", upSchema);
up.create({ u_name: "kriti", u_gender: "female" });
// up.updateMany({}, [
//   {
//     $set: {
//       u_gender: {
//         $switch: {
//           branches: [
//             { case: { $eq: ["$u_gender", "male"] }, then: "female" },
//             { case: { $eq: ["$u_gender", "female"] }, then: "male" },
//           ],
//         },
//       },
//     },
//   },
// ]);
// up.updateMany({}, [{ $set: { u_gender: { $eq: ["$female", "male"] } } }]);

// up.updateMany({ u_gender: "male" }, [
//   {
//     $set: {
//       u_gender: "female",
//       // u_gender: {
//       //   $cond: {
//       //     if: { $eq: ["$u_gender", "male"] },
//       //     then: "female",
//       //     else: "male",
//       //   },
//       // },
//     },
//   },
// ]);
// up.updateMany(
//   {},
//   {
//     u_gender: {
//       $cond: {
//         if: { $eq: ["$u_gender", "male"] },
//         then: "female",
//         else: "male",
//       },
//     },
//   }
// );
module.exports = { connect };
