const concat = require("concat-stream");
const through2 = require("through2");
const fs = require("node:fs");
const qs = require("querystring");
const http = require("http")
var size = 0;

const server = http.createServer((req,res)=>{
    req.
    pipe(through2(checkByte))
    .on("error",(err)=>{
        console.log(err)
    })
    
    .pipe(concat(onbody))

    



    function checkByte(buf,enc,cb){
        size+=buf.length;

       

        if(size>20){
            res.end("too big")
            cb(process.stderr.write("too big : "),null)

            
            

        }
        
        else{
            cb(null,buf)
        }

    }

    function onbody(body){
    const parse = qs.parse(body.toString());

    console.log(parse)
    res.end("ok")

}
})




server.listen(5000,()=>{    
    console.log("server is running at 5000")
})


