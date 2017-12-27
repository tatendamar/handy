const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const User = require('../models/user');


module.exports = (passport)=>{

    //using session
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done)=>{
        User.findById(id, (err, user)=>{
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField:  'email',
        passwordField:   'password',
        passReqToCallback: true
    },
    function(req, email, password,done){
     
        process.nextTick(()=>{
            //async
            User.findOne({'local.email' : email},(err, user)=>{
                if(err)
                return done(err);
                if(user){
            
                    return done(null, false, req.flash('signupMessage', 'Email already teken')); 
                } 
                 if(!req.user) {       
                    const newUser = new User();
                    newUser.local.email =  email;
                    newUser.local.password = newUser.generateHash(password);
                     
                  

                    newUser.save((err)=>{
                          if(err)
                            throw err;
                            return done(null, newUser);
                    });
                } else {
                   const user =  req.user;
                   user.local.username = email;
                   user.local.password = user.generateHash(password);

                   user.save((err)=>{
                       if(err)
                        throw err;
                        return done(null, user);
                   })
                }
            });
        });
    }
));
     
  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
  },
  function(req, email,password, done){
      process.nextTick(()=>{
          User.findOne({ 'local.email': email},(err, user)=>{

              // if there is an error, stop everything and return that
           // ie an error connecting to the database
              if(err)
              return done(err);

               // if the user is not found, then show login error
              if(!user)
              return done (null, false, req.flash('loginMessage', 'No user found'));
             
              //if passwords do not match 
              if(!user.validPassword(password)){
                return done(null, false, req.flash('loginMessage', 'Wrong password'));
              }
             
                return done(null,  user);
                req.flash('loginMessage', 'Successfully logged in');
      
          });
      });
  }
 ));

             
 };