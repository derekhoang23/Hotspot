import { Strategy as FacebookStrategy } from 'passport-facebook';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_CALLBACK } from '../config/fb';
import passport from 'passport';

export const facebookAuthConfig = function(db) {
  passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: FACEBOOK_CALLBACK,
    enableProof: true,
    profileFields: ['id', 'emails', 'name']
  }, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      return db.findOrCreateUser({facebookId: profile.id},
        {
          fb: {
            accessToken: accessToken,
            profile: profile
          }
        })
      .then((user) => done(null, user))
      .catch((err) => done(err, null));
    });
  }
  ));
};