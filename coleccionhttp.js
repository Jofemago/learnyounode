const { BufferList } = require('bl')
var processs = require("process")
var http = require("http")
const bl = new BufferList()


var url = processs.argv[2]


http.get(url,function(response){
    response.setEncoding('utf8')
    response.on('data', function (data) { bl.append(data) })
    response.on('error', console.error)
    response.on('end', function(data){
      console.log(bl.length);
      console.log(bl.toString());
    })
}).on("error", console.error)
