//
// We need this to build our post string
var apiWrapper = require('./models/api').apiWrapper,
    jsSHA = require('./models/sha').jsSHA,
    querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');



api = new apiWrapper('http://beluga/');


urlObj = api.callAPI('/test.php','getWeeklyStreams',{artistid:'200',startWeek:"1",endWeek:"50",startYear:"2011","endYear":"2011"},jsSHA);


var post_data = querystring.stringify(urlObj.reqObj);

console.log(urlObj);

var options = {
    host: 'beluga',
    port: 80,
    path: urlObj.url,
    //headers: urlObj.reqObj,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
    }
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
req.write(post_data);
req.end();
//

