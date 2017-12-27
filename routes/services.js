const Service = require('../models/service');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = (app)=>{

app.get('/', (req, res) => {
  res.render("main/home");
});


app.get('/services', (req, res) => {
  //get all services form DB
  Service.find({}, function(err, allServices){
      if(err){
          console.log(err);
      } else {
         res.render('services/services', {services: allServices, currentUser: req.user});
      }
  });
 
});

app.post("/services", isLoggedIn, (req, res) =>{
    //get data from form
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user.local._id,
        email: req.user.local.email
    }
    var newService = {name: name, price: price, image: image, description: desc, author: author}
    //create a new service and to database
    Service.create(newService, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
           res.redirect("/services");  
        }
    });
});

//NEW - show form to create new service
app.get("/services/new", isLoggedIn, (req, res)=>{
    res.render("services/new");
});

app.get("/services/:id", (req, res) =>{
    //find service with ID
    Service.findById(req.params.id).populate("comments").exec((err, foundService)=>{
        if(err){
            console.log(err);
        } else {
            console.log(foundService);
    //render show template with that ID
          res.render("services/show", {service: foundService});
        }
    });
});

//EDIT SERVICE ROUTE

app.get("/services/:id/edit", checkServiceOwner, (req, res)=>{
      Service.findById(req.params.id, (err, foundService)=>{
         res.render("services/edit", {service: foundService});   
    });
});

//UPDATE SERVICE ROUTE
app.put("/services/:id", (req, res)=>{
    Service.findByIdAndUpdate(req.params.id, req.body.service, (err, updatedService)=>{
        if(err){
            res.redirect("/services")
        } else {
            res.redirect("/services/" + req.params.id);
        }
    });
});

//DELETE ROUTE
app.delete("/services/:id", (req, res)=>{
    Service.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            res.redirect("/services");
        } 
    });
});

};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkServiceOwner(req, res, next){
       //is user logged in
     if(req.isAuthenticated()){
         
      Service.findById(req.params.id, (err, foundService)=>{
        if(err){
            res.redirect("back");
        } else {
            if(foundService.author.id.equals(req.user._id)){
               next();   
            } else {
                res.redirect("back");
            }
        }
    });
     } else {
         res.redirect("back");
     }
}



