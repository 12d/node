var mongoose = require('mongoose');
var db = mongoose.connection;
var promise = new Promise();
db.on('error', function(e){
    promise.reject(e)
});
db.once('open', function(e) {
    promise.resolve(e)
});

mongoose.connect('mongodb://localhost:27017/test');
module.exports = promise;