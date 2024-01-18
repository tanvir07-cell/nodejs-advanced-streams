const http = require("node:http");
const through2 = require("through2");
const concat = require("concat-stream");
const qs = require("querystring");

http.createServer((req,res)=>{
    req.pipe(concat(function(body){
        var params = qs.parse(body.toString())
        console.log(params)
        res.end("ok\n")

    }))
}).listen(5000)