//
// We need this to build our post string
var apiWrapper = require('./models/api').apiWrapper,
    jsSHA = require('./models/sha').jsSHA,
    querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '',
    method: 'GET'
};

var upto = process.argv[2];
var req;
console.log(upto);
while (upto > 0) {
    upto -= 1;
    req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));

        //res.setEncoding('utf8');
        //res.on('data', function (chunk) {
        //    console.log('CHUNK:');
        //    console.log(chunk);
        //});
    }).end();

    console.log('END');
}

//    var req = http.request(options, function(res) {
//        console.log('STATUS: ' + res.statusCode);
//        console.log('HEADERS: ' + JSON.stringify(res.headers));
//        res.setEncoding('utf8');
//        res.on('data', function (chunk) {
//        console.log('BODY: ' + chunk);
//  });

//api = new apiWrapper('http://beluga');
//api.callAPI('danceAPI','monkey',{},jsSHA);
