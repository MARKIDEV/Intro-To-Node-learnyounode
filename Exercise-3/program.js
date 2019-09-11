let fs = require("fs");
let file = process.argv[2];
let lines =
  fs
    .readFileSync(file)
    .toString()
    .split("\n").length - 1;
console.log(lines);
