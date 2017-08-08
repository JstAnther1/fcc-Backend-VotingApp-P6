var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema ({
    title: {
        type: String
    },
    options: {
        type: [String]
    },
    votecount : {
        type: [String]
    } 
});

var PollImport = module.exports = mongoose.model('PollsCollection', PollSchema);

module.exports.getData = function(cb){
    PollImport.find({}, cb);
} 

module.exports.saveOption = function(incomingpolldat, cb){
    var query = {'title':incomingpolldat.title};
    PollImport.findOneAndUpdate(query, incomingpolldat, {upsert:true}, cb);
}

module.exports.delPoll = function(polltodel, cb){
    var query = {'title': polltodel.title};
    PollImport.findOneAndRemove(query, cb);
}