const Service = require('../models/service');
const Comment = require('../models/comment');
var async = require('async');

module.exports = (app)=>{

app.get("/services/:id/comments/new",isLoggedIn, (req, res)=>{
    //find campground by id
    Service.findById(req.params.id, (err, service)=>{
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {service: service});
        }
    });
});

app.post("/services/:id/comments",isLoggedIn,(req, res)=>{
    Service.findById(req.params.id, (err, service)=>{
        if(err){
            console.log(err);
            res.redirect("/service");
        } else {
            Comment.create(req.body.comment, (err, comment)=>{
                if(err){
                    console.log(err);
                } else {
                   // add username and id
                   comment.author.id = req.user.local._id;
                   comment.author.email = req.user.local.email;
                   //save comment
                   comment.save();
                    service.comments.push(comment);
                    service.save();
                    res.redirect('/services/' + service._id);
                }
            })
        }
    })
});

};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



