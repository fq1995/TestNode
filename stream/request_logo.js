/**
 * Created by fu on 2017/10/24.
 */
var http = require('http')
var request = require('request')
var fs = require('fs')

http.createServer(function (rq, res) {
    /*fs.readFile('../logo.png', function (err, data) {
        if(err){
            res.end('file not exist!')
        }
        else{
            res.writeHead(200, {'Context-Type':'text/html'})
            res.end(data)
        }
    })*/
    // fs.createReadStream('../logo.png').pipe(res)
    request('http://www.imooc.com/static/img/common/logo.png').pipe(res)
}).listen(8090)