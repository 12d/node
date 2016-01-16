var mongoose = require('mongoose');
var db = mongoose.connection;
var promise = new Promise((resolve, reject)=>{
        db.on('error', function(e){
            console.log(e)
            reject(e)
        });
        db.once('open', function(e) {
            resolve(e)
        });
    });


mongoose.connect('mongodb://localhost/test');
module.exports = promise;