let fs = require("fs");
let path = require("path");
let extension = "." + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
  if (err) {
    console.log(error);
  } else {
    list.forEach(function(file) {
      if (path.extname(file) === extension) console.log(file);
    });
  }
});
