// const fs = require("fs");

// const out = fs.createWriteStream("./output.json");



// out.on("finish",()=>{
//     console.log("Done");
// })

// const data = { name:"Tanvir Rifat",age:22 };

// // Convert the object to a JSON string
// const jsonString = JSON.stringify(data);

// // Write the JSON string to the stream
// out.write(jsonString);

// // End the stream
// out.end();






const through = require("through2");
// var size = 0;

// // 1. process.stdin is a readble string stream (jeit amra terminal e likhbo)
// // 2. through.obj(transFormStrToObj) is a transform stream(ei through.obj(transFormStrToObj) amar string ke object e convert korbe)
// // 3. through.obj(printObj) jei object stream ti pass korbe ta print korbe:

process.stdin
.pipe(through.obj(transFormStrToObj))
.pipe(through.obj(printObj))

function transFormStrToObj(buf,enc,next){
    const key = buf.toString().split("=")[0];

    if(!buf.toString().includes("=")){
        return next(console.error("please provide a key value pair with = sign"),null)
    }
    next(null,{[key]:buf.toString().split("=")[1]})
}

function printObj(obj,enc,next){
    console.log(obj);

    next()
}


// const through = require("through2");

// process.stdin
// .pipe(through(transFormUpperCase))
// .pipe(through(printUpperCase))

// function transFormUpperCase(buf,enc,next){
//     next(null,buf.toString().toUpperCase())
// }

// function printUpperCase(buf,enc,next){
//     console.log(buf.toString())
//     next()
// }