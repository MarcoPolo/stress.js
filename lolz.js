var apiWrapper = require('./models/api').apiWrapper,
    jsSHA = require('./models/sha').jsSHA,
    querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');

api = new apiWrapper('http://beluga');
urlObj = api.callAPI('danceAPI','monkey',{},jsSHA);
urlObj = api.callAPI('api/artist/activityreport/index.php','getWeeklyStreams',{artistid:'200',startWeek:"1",endWeek:"50",startYear:"2011","endYear":"2011"},jsSHA);
console.log(urlObj);

var options = {
    host: 'beluga',
    port: 80,
    path: urlObj.url,
    headers: urlObj.reqObj,
    method: 'POST'
};

var upto = process.argv[2];
var req;
while (upto > 0) {
    upto -= 1;
    req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
    }).end();
    console.log('END');
}

