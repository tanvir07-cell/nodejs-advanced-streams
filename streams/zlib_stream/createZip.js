const zlib = require('node:zlib');
const fs = require('node:fs');

process.stdin
.pipe(fs.createReadStream(process.argv[2]))
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(process.argv[2]+'.gz'))
.on('finish', () => console.log('Done'))

