const net = require("node:net");

net.createServer((stream)=>{
    stream.pipe(net.connect(5000,"localhost")).pipe(stream)
}).listen(5001)