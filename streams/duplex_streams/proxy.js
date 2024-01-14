// net produces tcp servers and clients

// proxy.js theke jabe --> echo.js e tarpor --> aber proxy.js e back korbe

// Here 5001 is the proxy server and 5000 is the real server
const net = require("node:net");

net.createServer((stream)=>{
    stream.pipe(net.connect(5000,"localhost")).pipe(stream)
}).listen(5001)