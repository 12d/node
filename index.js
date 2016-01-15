var express = require('express');
var conf = require('./conf/dev');
var hotel = require('./model/hotel');
var app = express();
hotel.ready();
app.get('/insert', function(req, res) {
    hotel.insert({
        name:'上海国际大酒店',
        owner: 'ctrip.com',
        price: 1212,
        star: 5
    });
    res.end('inserted')
});
app.get('/insert/star/:star', function(req, res) {
    hotel.insert({
        name:'上海国际大酒店',
        owner: 'ctrip.com',
        price: 1212,
        star: req.params.star
    });
    res.end('inserted')
});
app.get('/get',(req,res)=>{
    hotel.query({"star":"5"}, (err, rs)=>{
        res.end(JSON.stringify(rs));
    });
})
app.get('/get/star/:star',(req,res)=>{
    console.log(req);
    hotel.query({"star":req.params.star}, (err, rs)=>{
        res.end(JSON.stringify(rs));
    });
})
app.get('/delete/star/:star',(req,res)=>{
    var star = req.params.star;
    hotel.delete({"star":star}, (err, rs)=>{
        res.end('delete star:'+star);
    });
})

app.listen(conf.port);
console.log('server started at:'+conf.port)
