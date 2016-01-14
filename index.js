var express = require('express');
var conf = require('./conf/dev');
var hotel = require('./model/hotel');
var app = express();

app.get('/', function(req, res) {
    res.type('text/plain'); // set content-type
    res.end('i am a beautiful butterfly'); // send text response
});
hotel.ready(function(){
    this.insert({
        name:'上海国际大酒店',
        owner: 'ctrip.com',
        price: 1212,
        star: 5
    });
})
app.listen(conf.port);
console.log('server started at:'+conf.port)
