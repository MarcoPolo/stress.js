var apiWrapper = require('./models/api').apiWrapper,
    jsSHA = require('./models/sha').jsSHA,
    querystring = require('querystring'),
    http = require('http'),
    fs = require('fs');



api = new apiWrapper('http://beluga/');


//urlObj = api.callAPI('/test.php','getWeeklyStreams',{artistid:'200',startWeek:"1",endWeek:"50",startYear:"2011","endYear":"2011"},jsSHA);

urlObj = api.callAPI('/api/artist/demographics/index.php','getDemographicsData',{artistID:'200'},jsSHA);


var post_data = JSON.stringify(urlObj.reqObj);

console.log(post_data);
console.log(urlObj);

var options = {
    host: 'beluga',
    port: 80,
    path: urlObj.url,
    //headers: urlObj.reqObj,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': post_data.length
    }
};

timetable = {};

rescallback = function(id) {
    var startTime = new Date();

    return function(res){
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
      
        res.on('data', function (chunk) {
            var delta = new Date() - startTime
            timetable[id] = delta;
            console.log('diff:',delta);
            console.log('BODY: ' + chunk);
        });

        if( id == 1 ){
           avg = avgTime(); 
           console.log('\n');
           console.log('\n');
           console.log('The average time was:',avg)
           console.log('\n');
           console.log('\n');
        }
    }
}

var avgTime = function() {
    var sum=0;
    for ( id in timetable ){
        sum += timetable[id];
    }
    return sum/process.argv[2];
}

/*
var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
  
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
*/

var upto = process.argv[2];

var req;

while (upto > 0) {
    req = http.request(options, rescallback(upto));
    req.write(post_data, encoding='utf8');
    req.end();
    console.log('END');
    upto -= 1;
}




//req.write('data\n');

//

