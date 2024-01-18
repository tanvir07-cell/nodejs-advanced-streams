const through2 = require('through2');

const createHash = require('crypto').createHash;

process.stdin
.pipe(through2(cryptoHash))
.pipe(through2(printHash))

function cryptoHash(buf, enc, next) {
    const hash = createHash('sha256');
    hash.update(buf);
    this.push(hash.digest('hex'));
    next();
}

function printHash(buf, enc, next) {
    console.log(buf.toString());
    next();
}