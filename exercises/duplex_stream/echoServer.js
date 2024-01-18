const net = require("node:net");
const through = require("through2");

net.createServer((stream)=>{
    stream.pipe(through(loud)).pipe(stream)
}).listen(5000)


function loud(chunk,enc,cb){
    cb(null,chunk.toString().toUpperCase())
    
    
}