var process = require("process");//para tomar argumentos  por linea de comandqos
var fs = require("fs");//obtener la lista de los ficheros de una carpeta espcifica
var path = require("path")

var direccion = process.argv[2] // direccion de la carpeta que queremos examinar
var extension = process.argv[3] // extension del tipo de archivo que queremos filtrar

fs.readdir(direccion,function (err,list){//leemos el archivo y declaramos su callback
    if (err) {
        console.log("directorio invalido");
        console.log(err);
        
        
    }

    var files = []
    list.forEach(element => {
        //console.log(path.extname(element) == extension);
        if (path.extname(element) == ".".concat(extension) ){

            //files.push(element)            
            console.log(element);
            
        }
    });
   // console.log(files);
    

    
})