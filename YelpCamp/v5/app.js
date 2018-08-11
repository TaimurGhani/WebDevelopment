const express = require("express"),
     app = express(),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose"),
     Campground = require('./models/campground'),
     Comment = require('./models/comment'),
     seedDB = require('./seeds.js');

seedDB();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/yelp_camp_v3', { useNewUrlParser: true });


app.get('/', function(req,res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get('/campgrounds', function(req,res) {
    // Get all campgrounds
    Campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds});
        }
    })
});

// NEW - show form to create new campground
app.get('/campgrounds/new', function(req,res) {
    res.render("campgrounds/new");
});

// CREATE - add new campground to DB
app.post('/campgrounds', function(req,res) {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.description;
    let newCampground = {name, image, description};
    Campground.create(newCampground, function(err, newCampground) {
        if (err) {
            console.log(err);
        }
        else {
            // redirect to back to campgrounds page
            //render show template with info about campground
            res.redirect("campgrounds");
        }
    });
});

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', function(req,res) {
    // find the campground with provided ID
    // render show template with that campground
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// =====================
//    COMMENT ROUTES
// =====================

// NEW - show form to create a new comment for a campground
app.get('/campgrounds/:id/comments/new',function(req,res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        }
        else {
           res.render('comments/new', {campground}); 
        }
    });
});

app.post('/campgrounds/:id/comments',function(req,res) {
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        }
        else {
            console.log(req.body.comment);
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                }
                else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + req.params.id);
                }
            })
        }
    })
});



app.listen(3000, function() {
	console.log("YelpCamp server is running on port 3000");
});