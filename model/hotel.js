/**
 * Created by hyy on 16-1-14.
 * @contact li.xx@ctrip.com
 * @description
 */
var conn = require('../conn/default');
var mongoose = require('mongoose');
var Hotel;
function createTables(){
    var hotelSchema = new mongoose.Schema({
        name:String,
        star:Number,
        owner:String,
        price:Number
    });
    return mongoose.model('HotelModel', hotelSchema);
}

module.exports = {
    ready: function(callback){
        var self = this;
        conn.then(function(){
            Hotel = createTables();
            callback.call(self)
        });
    },
    insert: function(data){
        var rc = new Hotel(data);
        rc.save((err, ok)=>{

        })
    },
    delete: function (condition, callback) {
        Hotel.remove(condition, callback);
    },
    query: function (condition, callback) {
        Hotel.find(condition, callback);
    }
}