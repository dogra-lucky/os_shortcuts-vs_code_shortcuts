// const zlib = require("node:zlib");
// const gzip = zlib.createGzip();
// const { pipeline } = require("node:stream");
// const { createReadStream, createWriteStream } = require("node:fs");
// // const { promisify } = require("node:util");
// const source = createReadStream("./eq.js");
// const destination = createWriteStream("eq_copy.js");
// pipeline(source, destination, (err) => {
//   if (err) {
//     console.error("An error occurred:", err.message);
//     process.exitCode = 1;
//   }
// });
// console.log(zlib);
