var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var cors = require('cors');
var session = require('express-session');
var connect_ensure_login = require('connect-ensure-login');
var passport = require('passport');

var port = 3000 || process.env.PORT;
var mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/votingappdb');

mongoose.connection.on('connected', function(){
    console.log('connected to db: votingappdb');
});
mongoose.connection.on('error', function(err){
    console.log('error connecting');
});

var config = require('./config/secret');

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

var app = express();

var index = require('./routes/index'); 
var users = require('./routes/user');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({ 
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);



app.listen(port, function(){
    console.log('server started on port 3000');
});

module.exports = app;




