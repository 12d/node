/**
 * Created by hyy on 16-1-14.
 * @contact li.xx@ctrip.com
 * @description
 */
var conn = require('../conn/default');
var Record;
function createTables(mongoose){
    var hotelSchema = new mongoose.Schema({
        name:String,
        star:Number,
        owner:String,
        price:Number
    });
    return mongoose.model('Hotels', hotelSchema);
}

module.exports = {
    ready: function(callback){
        var self = this;
        conn.when(function(){
            Record = createTables();
            callback.call(self)
        });
    },
    insert: function(data){
        Record.save(new Record(data));
    },
    delete: function (data) {
        
    },
    query: function (condition) {

    }
}