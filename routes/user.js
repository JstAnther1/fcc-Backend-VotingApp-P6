var express = require('express');
var router = express.Router();
var passport = require('passport');
var connect_ensure_login = require('connect-ensure-login');

var User = require('../models/user.model');

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



module.exports = router;