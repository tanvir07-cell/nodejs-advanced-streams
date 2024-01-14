const fs = require("node:fs");


process.stdin.pipe(fs.createReadStream(process.argv[2])).pipe(process.stdout)