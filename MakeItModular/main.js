var process = require("process");
//var fs = require("fs")

var ls = require("./modular.js")


ls(process.argv[2], process.argv[3], function(err, data){
    if (err)
        return console.error("este es un error: ", err);
         

    data.forEach(file => {
        
        console.log(file);
        
    });
        
})

