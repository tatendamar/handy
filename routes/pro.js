const Pro = require('../models/pro');


module.exports = (app)=>{

//route for using the become-an-instructor 
    app.get('/become-a-pro', (req, res, next)=>{
      res.render('Pro/Be-a-Pro');  
    });

    app.post('/become-a-pro',isLoggedIn, (req, res, next)=>{
             
               const title = req.body.title;
               const username = req.body.username
               const desc = req.body.desc;
               const address = req.body.address;
               const city = req.body.city;
               const area = req.body.area;
               const mobile = req.body.mobile;
               const level = req.body.level;

               const newService = {title: title, username: username, desc: desc, address: address, city: city, area: area, mobile: mobile, level: level}
               //create a new application
               Pro.create(newService, function(err, newlyCreated){
                 if(err){
                   console.log(err);
                 }else{
                   res.redirect("/services");
                 }
               });

           });

           /*function(course, callback){
               User.findOne({_id: req.user._id}, (err, foundUser)=>{
                   foundUser.role = "teacher";
                   foundUser.coursesTeach.push({ course: course._id});
                   foundUser.save((err)=>{
                       if(err)
                        return next(err);
                        res.redirect('/teacher/dashboard');
                   });
               });
           }
       ]);
    });

    //get the courses attributes from the user model for a particular user that has registered for to be a tutor and populate course
   /* app.get('/teacher/dashboard', (req, res, next)=>{
        User.findOne({_id: req.user._id})
        .populate('coursesTeach.course')
        .exec((err, foundUser)=>{
            res.render('teacher/teacher-dashboard', {foundUser: foundUser});

        });
    });

//revenue report route
    app.get('/revenue-report', (req, res)=>{
        var revenue = 0;
        User.findOne({_id: req.user._id}, (err, foundUser)=>{
            foundUser.revenue.forEach(function(value){
               revenue += value; 
            });
            res.render('teacher/revenue-report', {revenue: revenue})
        });
    });*/
}
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}



