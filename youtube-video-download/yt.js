const fs = require("node:fs");
const through2 = require("through2");
const ytdl = require('ytdl-core');



process.stdin
.pipe(through2(write,end))

function write(buf,enc,next){
    let url = buf.toString();

    process.stdout.write("Downloading..."+url)
    
    ytdl(url).pipe(fs.createWriteStream("video.mp4"))
    // after downloading the video.mp4 file then show this message
    
    .on("finish",()=>{
        console.log("Download Complete")
       

      
    
    })

       
        


    
    next()

}


// when i press ctrl+d in the command line then this work:
function end(done){
   console.log("done")
   done()

}