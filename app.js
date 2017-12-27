const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const ejs           = require('ejs');
const engine        = require('ejs-mate');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session       = require('express-session');
const MongoStore    = require('connect-mongo')(session);
const cookieParser  = require('cookie-parser');
const flash         = require('connect-flash');


const app = express();

const secret = require('./config/secret');
require('./config/passport')(passport);

//setting up the database
mongoose.connect(secret.database, {useMongoClient: true},  (err)=>{
    if(err){
        console.log(err)
    } else {
    console.log("Connected to the database")   
    }
  });


  //setting up all the libraries 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('ejs', engine);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
    store: new MongoStore({ url: secret.database }),
    ttl: 2 * 24 * 60 * 60 //time to leave this is the time to discard the session info
}));

//initilizing the passport module
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


//grabing routes from the route folder
//require('./routes/main')(app, passport);
require('./routes/user')(app, passport);
require('./routes/services')(app, passport);
require('./routes/comments')(app, passport);
require('./routes/pro')(app);

//setup port environment
  app.set('port', (process.env.PORT || secret.port));
  
  app.listen(app.get('port'),()=>{
      console.log("Server started on port " + app.get('port'));
  });