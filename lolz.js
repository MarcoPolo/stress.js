// We need this to build our post string
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');



    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST'
    };

    var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body




//req.write('data\n');
//req.write('data\n');
//req.end();

var callAPI = function(method, paramObj, callback){
    
    var response = null;

    requestObj = {
        "headers" : {
            "publicKey": ''
        },
        "method" : method,
        "parameters" : paramObj
    };
    
    var signature = getSignature(requestObj);
    var requestURL = this.apiPathName + "?signature=" + signature;

    //$.post(requestURL, JSON.stringify(requestObj), cache.saveAndCall(method, paramObj, callback));
};
