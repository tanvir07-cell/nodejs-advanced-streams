const zlib = require("node:zlib");
const createHash = require("node:crypto").createHash

process.stdin

.pipe(zlib.createGunzip())
.pipe(createHash("sha512",{encoding:"hex"}))
.pipe(process.stdout)