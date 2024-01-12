const fs = require("node:fs");
const concat = require("concat-stream");
const queryString = require("querystring");
const http = require("node:http");
const formParse = require("body/any");

const through2 = require("through2")


var server = http.createServer((req,res)=>{
  req.pipe(checkByte()).pipe(concatStr())

  // check if the buffer size is greater than 20 using through2;
  function checkByte(){
    var size = 0;
    return through2(function(chunk,enc,cb){
      size+=chunk.length;
      if(size>20){
        res.end("too big")
        cb()
      }
      else{
        this.push(chunk)
        cb()
      }
      
      
    })
  }

  function concatStr(){
    return concat(function(body){
      const params = queryString.parse(body.toString());
      console.log(params)
      res.end("ok")
    })
  }
  
})

server.listen(5000,()=>{
  console.log("server is running at 5000")
})