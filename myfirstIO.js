var process = require("process");
var fs = require("fs");

//console.log(process.argv);

var buffer = fs.readFileSync(process.argv[2]); //representacion del archivo en un buffer, nombre de archivo por linea de comandos
var data = buffer.toString(); //volver contenido en string
var dataLines = data.split("\n"); //crea un arreglo separado por los saltos de linea

console.log(dataLines.length - 1); //cuantos elementos existan aqui es el numero
