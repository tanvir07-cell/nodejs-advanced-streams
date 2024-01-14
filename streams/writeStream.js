const fs = require("node:fs");

const out = fs.createWriteStream("makeWriteStream.txt")

out.on("finish",()=>{
    console.log("Done...")
})

out.write("Hello My name is Tanvir Rifat\n")

out.write("I am a student of CSE\n")

out.end()

