/*  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. The first argument is the  
  directory name and the second argument is the extension filter. Print the  
  list of files (one file per line) to the console. You must use  
  asynchronous I/O.  


  */

 var process = require("process");
 var fs = require("fs")
 var path = require("path")
 

  
function ls(dir, ext, callback){//como va ser un modulada la funcion, 
                                //el callback lo defino en el archivo que llame esta funcion, este caso main

    fs.readdir(dir,function(err, data){

        if(err)
            return callback(err,data)//damos manejo de errores al archivo que llame esta funcion

        files = []
        data.forEach(file => {
            if(path.extname(file) == ".".concat(ext)){
                files.push(file)
            }
        });
        callback(null, files)

    })
    
}

module.exports = ls

