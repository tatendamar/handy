const passport = require('passport');
const passportConfig = require('../config/passport');
const LocalStrategy = require('passport-local').Strategy;

//include User model
const User = require('../models/user');

module.exports = (app)=>{
//show register form
app.get("/register", (req, res)=>{
  res.render("accounts/register", {title: "Registration", message: req.flash('signupMessage')});
});

   //handle local register by posting the information to the server
app.post('/register',passport.authenticate               ('local-signup',{
      successRedirect: '/services',
      failureRedirect: '/register',
      failureFlash: true
   }));   
      

//show login
app.get("/login", (req, res, next)=>{
  res.render("accounts/login", {title: 'Login', message: req.flash('loginMessage') 
 });
});


//handle login logic

app.post("/login", passport.authenticate("local-login",
       {
           successRedirect: "/services",
           failureRedirect: "/login",
           failureFlash: true
       }));

       
app.get('/connect/local', (req, res)=>{
        res.render('accounts/connect-local', { message: req.flash('signupMessage')});
    });

 app.post('/connect/local', passport.authenticate('local-signup',{
        successRedirect: '/services',
        failureRedirect: '/connect/local',
        failureFlash: true
    }));


//logout
app.get("/logout", (req, res)=>{
  req.logout();
  req.flash("success", "Logged Out!");
  res.redirect("/services");
 });

};

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  req.flash("error", "Please login in first");
  res.redirect("/login");
}

