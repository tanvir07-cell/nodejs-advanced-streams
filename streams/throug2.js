// through2 holo ekti stream ke transform (like uppercase,lowercase) korar jonno use kora hoy.

// ei through2 npm package ti node js stream.Transform() class er optional:

const through2 = require("through2");


process.stdin.pipe(transformStr()


  

    

    



).pipe(process.stdout)


// transofrm the string using throug2

function transformStr(){
        return through2(function(chunk,enc,cb){
            for(let i=0;i<chunk.length;i++){
                if(chunk[i]===97){
                    chunk[i] = 122  // swap a to z
                }


            }

            this.push(chunk.toString().toUpperCase());
            cb()

        })
    }