var http = require('http');
var qs = require('querystring');

var data = {
    platform: 'android',
    kweexversion: '1.0.5'
};//这是需要提交的数据


var content = qs.stringify(data);

// http://webapi.kuwo-inc.com/config?platform=android&kweexversion=1.0.5
// http://kweex.kuwo-inc.com/200002/0.0.35/native/index.js
var options = {
    hostname: 'webapi.kuwo-inc.com',
    port: 80,
    path: '/config?' + content,
    method: 'GET'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log(res);

    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('sss' , chunk);
        // applist = JSON.parse(chunk).applist;
        // url = JSON.parse(chunk).host;
        // for (let i = 0; i < applist.length; i++) {
            // httpFnc(url, applistp[i]);
        // }
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});
req.end();

// function httpFnc(url, data) {
// // http://webapi.kuwo-inc.com/config?platform=android&kweexversion=1.0.5
// // http://kweex.kuwo-inc.com/200002/0.0.35/native/index.js
//     let options = {
//         hostname: url,
//         port: 80,
//         path: `${data.appid}/${data.version}/native/index.js`,
//         method: 'GET',
//         headers: {
//             'Content-Type': ' application/javascript'
//         }
//     };
//
//     let req = http.request(options, function (res) {
//         // console.log('STATUS: ' + res.statusCode);
//         // console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//             console.log(`请求成功: ${url}/${data.appid}/${data.version}/native/index.js`);
//         });
//     });
//
//     req.on('error', function (e) {
//         console.log(chalk.red(`请求失败: ${url}/${data.appid}/${data.version}/native/index.js`));
//     });
//     req.end();
// }
