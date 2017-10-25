/**
 * Created by fu on 2017/10/24.
 */
var fs = require('fs')

fs.createReadStream('../aaaa.avi').pipe(fs.createWriteStream('1-pipe.avi'))