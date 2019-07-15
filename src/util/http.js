var http = require('http');
var qs = require('querystring');
const chalk = require('chalk');

const httpFnc = function (url, data) {
// http://webapi.kuwo-inc.com/config?platform=android&kweexversion=1.0.5
// http://kweex.kuwo-inc.com/200002/0.0.35/native/index.js
    var options = {
        hostname: url,
        port: 80,
        path: `${data.appid}/${data.version}/native/index.js`,
        method: 'GET'
    };

    var req = http.request(options, function (res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(`请求成功: ${url}/${data.appid}/${data.version}/native/index.js`);
        });
    });

    req.on('error', function (e) {
        console.log(chalk.red(`请求失败: ${url}/${data.appid}/${data.version}/native/index.js`));
    });
    req.end();
}
export default httpFnc;
