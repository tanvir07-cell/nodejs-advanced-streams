const through = require('through2');
const fs = require('fs');
let size = 0;


process.stdin
.pipe(through.obj(transFormObj))
.pipe(through.obj(printObj))

function transFormObj(buf,enc,next){
    if(buf.includes("=")){
        let arr = buf.toString().split("=")
        let key = arr[0];
        let value = arr[1];
        
        next(null,{[key]:value,size:size+=buf.length})

    }
    
    

}

function printObj(buf,enc,next){
    console.log(buf);
    next()
   
}

