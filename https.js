/**
 * Created by fu on 2017/10/17.
 */
var  https = require('https')
var fs = require('fs')

var options = {
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cret.pem')
}

https.createServer(options, function (req, res) {
    res.writeHead(200)
    res.end('Hello Imooc')
}).listen(8090)