var process = require("process");
var fs = require("fs");


buffer = undefined;

fs.readFile(process.argv[2], function(err, buffer){
    if (err) {
        return console.log(err)
      }

    data = buffer.toString();
    datalines = data.split("\n");
    console.log(datalines.length- 1);
})