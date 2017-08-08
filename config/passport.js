var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var thirdPartySecret= require('../config/oauth');
var User = require('../models/user.model');

module.exports = function(passport){
    passport.use(new FacebookStrategy({
        clientID: thirdPartySecret.facebook.clientID,
        clientSecret: thirdPartySecret.facebook.clientSecret,
        callbackURL: thirdPartySecret.facebook.callbackURL,
        profileFields: ['id', 'name','picture.type(large)', 'emails', 'displayName', 'about', 'gender']
    },  /*IMPORTANT^ the above profileFields are specific to passport-facebook in order to access the above info required (especially important is email), router.get authenticate needs added {scope:emails} as well */
    function(accessToken, refreshToken, profile, cb) {
        User.findOne({ID: profile.id}, function(err, user){
            if(err){
                throw err;
            }  
            if(!err && user !== null){
                cb(null, user);
            } else {
                newUser = new User ({
                    name: profile.displayName,
                    handle: profile.name.familyName,
                    ID: profile.id,
                    email:profile.emails[0].value,
                    created: Date.now()
                });
                newUser.save(function(err, data){
                    if(err){
                        throw err;
                    } else {
                        console.log("new user registered.");
                        cb(null, newUser);
                    }
                });
            }
        });    
    }
    ));

    passport.use(new TwitterStrategy({
        consumerKey: thirdPartySecret.twitter.consumerKey,
        consumerSecret: thirdPartySecret.twitter.consumerSecret,
        callbackURL: thirdPartySecret.twitter.callbackURL,
        userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
    }, /*IMPORTANT^ the above userProfileURL is REQUIRED, TOGETHER with adjuting twitter special permissions setting online to get user email in argument 'profile'*/
    function(accessToken, refreshToken, profile, cb) {
        User.findOne({ID: profile.id}, function(err, user){
            if(err){
                throw err;
            }  
            if(!err && user !== null){
                cb(null, user);
            } else {
                newUser = new User ({
                    name: profile.displayName,
                    handle: profile.username,
                    ID: profile.id,
                    email:profile.emails[0].value,
                    created: Date.now()
                });
                newUser.save(function(err, data){
                    if(err){
                        throw err;
                    } else {
                        console.log("new user registered.");
                        cb(null, newUser);
                    }
                });
            }
        });    
    }
    ));
}
