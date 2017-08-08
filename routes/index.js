var express = require('express');
var router = express.Router();
var passport = require('passport');
var cors = require('cors');
var connect_ensure_login = require('connect-ensure-login');

var Polls = require('../models/poll.model');


router.get('/allcurrentpolls',function(req,res,next){
    Polls.getData(function(err, data){
        if(err){
            throw err;
        } else {
            res.json(data);
        }
    });
});

router.post('/saveoption',function(req,res,next){
    let incomingpolldat = req.body;
    
    Polls.saveOption(incomingpolldat, function(err, data){
        if(err){
            res.json({success: false, message:"Failed to save/update"});
        } else {
            res.json({success: true, message:"Successfully saved/updated"});
        }
    });
});
/*of note!: using "let incomingpolldat = req.body;" is important, because if use the usual
instantiate "let .. = new Polls({...}) for validation will lead to changing field '_id' in mongoose and thus error */

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/login/facebook', passport.authenticate('facebook', {scope: ['email', 'public_profile', 'user_friends', 'user_photos']}));
router.get('/login/twitter', passport.authenticate('twitter'));
router.get('/login/facebook/return', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('http://localhost:4200/allcurrentpolls');
  });
router.get('/login/twitter/return', passport.authenticate('twitter', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('http://localhost:4200/allcurrentpolls');
  });  

router.get('/profile', function(req, res){
    res.json(req.user);
  });

router.get('/logout', function(req, res){
    req.logOut();
    res.json({success: true});
    
});

router.post('/delpoll', function(req,res,next){
    let incomingpolldat2 = req.body;
    
    Polls.delPoll(incomingpolldat2, function(err, data){
        if(err){
            res.json({success: false, message:"Failed to save/update"});
        } else {
            res.json({success: true, message:"Successfully saved/updated"});
        }
    });

});

module.exports = router;

/*Additional feature points: add to db based on ip address such that 1 person at an IP address can only vote 1 time on any single poll
req.connection.remoteAddress/req.socket.remoteAddress || req.headers['x-forwarded-for'] <--if server is behind proxy */