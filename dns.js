const dns = require("node:dns");
dns.lookup("localhost", (err, address, family) => {
  console.log("address: %j family: IPv%s", address, family);
});
