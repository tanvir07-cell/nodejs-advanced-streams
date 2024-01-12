const fs = require("node:fs");

const w = fs.createWriteStream("./makeWriteStream.txt");




w.write("Hello world\n");

w.write("My name is Tanvir Rifat\n");

 w.end()

w.on("finish",()=>{
    console.log("finished") 
})