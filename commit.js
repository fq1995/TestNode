/**
 * Created by fu on 2017/10/12.
 */
var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content':'一起期待下一期的课程',
    'cid':348
})

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'post',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=e7b4973c-35e3-46ee-b862-89a6df0ead27; imooc_isnew_ct=1504341413; UM_distinctid=15e94dffd3dcfd-0aa91d42d4028d-1571466f-100200-15e94dffd4c22b; CNZZDATA1261110065=2064530148-1505735122-null%7C1505735122; PHPSESSID=sevk0rrff3qo0mcvvint914o94; loginstate=1; apsid=JlNDBjZTljMTgwZTk5ZTVkNzVkOTIyN2Q1MjY4NTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTk5MDk1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxODg2NTUwNzE3OEAxNjMuY29tAAAAAAAAAAAAAAAAADVmMGQyODM0ZmEzNDQzOTE5MTg0NTcwZDNjMGU3N2Y3iXnfWQAAAAA%3DYT; last_login_username=18865507178%40163.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1507634165,1507724699,1507809767,1507817946; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1507818420; imooc_isnew=2; cvde=59df59cecf4de-116',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0',
        'X-Requested-With':'XMLHttpRequest'
    }

}

var req = http.request(options, function (res) {
    console.log('Status: '+res.statusCode)
    console.log('headers: '+JSON.stringify(res.headers))

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function () {
        console.log('评论完毕！')
    })

    req.on('error', function (e) {
        console.log('Error: '+e.message)
    })


})
req.write(postData)

req.end()