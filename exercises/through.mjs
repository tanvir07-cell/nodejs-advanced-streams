import through2 from "through2";
import fs from "node:fs"

process.stdin
.pipe(through2(transFormUpper,
    // this is the flush function that is called at the end of the stream
    function(cb){
    var str = 'tacking on an extra buffer to the end'
    this.push(str.toUpperCase());
    cb();
}))
.pipe(fs.createWriteStream('./out.txt'))


function transFormUpper(buf,enc,next){
    next(null,buf.toString().toUpperCase())
}

