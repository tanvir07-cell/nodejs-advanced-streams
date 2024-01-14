// This is the commmand line echo server:

const net = require("node:net")
const through2 = require("through2")

const server = net.createServer((stream)=>{
    stream.pipe(
        through2(function(chunk,enc,cb){
            this.push(chunk.toString().toUpperCase())
            cb()
        })
    ).pipe(stream)

})

server.listen(5000)