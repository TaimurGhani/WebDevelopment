const express = require("express");
const app = express()
const bodyParser = require("body-parser")
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let campgrounds = [
	{ name: "Salmon Creek", image: "https://acadiamagic.com/280x187/md-campground.jpg" },
	{ name: "Granite Hill", image:"http://www.gobroomecounty.com/files/hd/Campground1.jpg"},
	{ name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanGli7wnF2weup-9l08yTcVs76ebTjasCFkfCEcE57IqzjQXkjA"}
];

app.get('/', function(req,res) {
    res.render("landing");
});

app.get('/campgrounds', function(req,res) {
    res.render("campgrounds", {campgrounds});
});

app.get('/campgrounds/new', function(req,res) {
    res.render("new");
});

app.post('/campgrounds', function(req,res) {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name, image};
    campgrounds.push(newCampground);
    // redirect to back to campgrounds page
    res.redirect("campgrounds");
});

app.listen(3000, function() {
	console.log("YelpCamp server is running on port 3000");
});