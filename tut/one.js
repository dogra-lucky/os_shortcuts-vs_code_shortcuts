const NodeCache = require("node-cache");
const myCache = new NodeCache();
let obj = { hello: "world", good: "morning" };
let success = myCache.set("hello", obj, 10);
setTimeout(() => {
  console.log(myCache.get("hello"));
}, 1000);
