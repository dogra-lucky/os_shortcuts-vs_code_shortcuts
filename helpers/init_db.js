const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "mongoClient";
// const db = client.db(dbName);

client
  .connect()
  .then(() => console.log("db connected"))
  .catch((err) => {
    throw err;
  });

const db = client.db("mongo_client");
const clOne = db.collection("clOne");
// clOne
//   .insertOne({ class: "5th", roll_no: "ght" })
//   .then(() => {
//     console.log("data inserted");
//   })
//   .catch((err) => {
//     throw err;
//   });`
// clOne
//   .aggregate()
//   .match({ roll_no: 32 })
//   .out({ coll: "roll_32", db: "mongo_client" });
async function foo() {
  const aggIns = clOne.aggregate([
    { $match: { roll_no: 32 } },
    { $out: "roll_no_32" },
  ]);
}
foo();
