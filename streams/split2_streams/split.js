// by default split2 uses \n as the delimiter


// const split = require("split2")
// const through = require("through2")
// let lineCount = 0;
// process.stdin
// .pipe(split())
// .pipe(through(write,end))
// function write(buffer,encoding,next){
//     lineCount++;
//     next()
// }
// function end(done){
//     console.log(lineCount)
//     done()
// }



// if i count the line with space then i have to use this code

const split = require("split2")
const through = require("through2")
let spaceCount = 0;

process.stdin
.pipe(split(/\s+/))
.pipe(through(write,end))

function write(buf,enc,next){
    spaceCount++;
    next()

}

function end(done){
    console.log(spaceCount);
    done()
}

var path = require("path")

console.log(__dirname+"/split.js")

