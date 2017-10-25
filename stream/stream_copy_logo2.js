/**
 * Created by fu on 2017/10/24.
 */
var fs = require('fs')

var readStream = fs.createReadStream('../aaaa.avi')
var writeStream = fs.createWriteStream('1-stream.avi')

readStream.on('data', function (chunk) {
    if(writeStream.write(chunk) == false){
        console.log('still cached')
        readStream.pause()
    }
})

readStream.on('end', function () {
    writeStream.end()
})

writeStream.on('drain', function () {
    console.log('data drains')

    readStream.resume()
})