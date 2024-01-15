var createHash = require("node:crypto").createHash

process.stdin
.pipe(createHash("sha512",{encoding:"hex"}))
.pipe(process.stdout)

