var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: String,
    handle: String,
    ID: String,
    email: String,
    created: Date
});

var UserImport = module.exports = mongoose.model('UserCollection', UserSchema);