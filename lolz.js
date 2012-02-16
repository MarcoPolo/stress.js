//
// We need this to build our post string
var apiWrapper = require('./models/api').apiWrapper,
    jsSHA = require('./models/sha').jsSHA,
    querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');



api = new apiWrapper('http://beluga/');


urlObj = api.callAPI('api/artist/activityreport/index.php','getWeeklyStreams',{artistid:'200',startWeek:"1",endWeek:"50",startYear:"2011","endYear":"2011"},jsSHA);



var options = {
    host: 'beluga',
    port: 80,
    path: urlObj.url,
    headers: urlObj.reqObj,
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
req.end();
//

api = new apiWrapper('http://beluga');


urlObj = api.callAPI('danceAPI','monkey',{},jsSHA);
console.log(urlObj);
