/**
 * Created by fu on 2017/10/24.
 */
var Readable = require('stream').Readable
var Writable = require('stream').Writable


var readStream = new Readable()
var writeStream = new Writable()


readStream.push('I ')
readStream.push('Love ')
readStream.push('Imooc\n ')
readStream.push(null)

writeStream._write = function (chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
}

readStream.pipe(writeStream)