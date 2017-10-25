/**
 * Created by fu on 2017/10/24.
 */
var fs = require('fs')
var source = fs.readFileSync('../logo.png')

fs.writeFileSync('stream_copy_logo.png',source)