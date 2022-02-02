const fs = require("fs");

let hello = require("./web");

fs.writeFileSync("index.html", hello.hello);
