const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");
    expressSanitizer = require("express-sanitizer");
// APP CONFIG
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });

// MONGOOSE/MODEL CONFIG
let blogSchema = new mongoose.Schema({
	title: String,
	image: String, 
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES
app.get('/', function(req,res) {
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get('/blogs', function(req,res) {
	Blog.find({}, function(err, blogs) {
		if(err) {
			console.log("ERROR!");
		}
		else {
			res.render("index", {blogs})
		}
	});
});

// NEW ROUTE
app.get('/blogs/new', function(req,res) {
    res.render("new");
});

// CREATE ROUTE
app.post('/blogs', function(req,res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);
    let newBlog = req.body.blog;
    Blog.create(newBlog, function(err, newBlog) {
    	if (err) {
    		res.render("new");
    	}
    	else {
    		res.redirect("/blogs");
    	}
    })
});

// SHOW ROUTE
app.get('/blogs/:id', function(req,res) {
	Blog.findById(req.params.id, function(err, blog) {
		if (err) {
			console.log(err);
			res.redirect("/blogs");
		}
		else {
			res.render("show", {blog});
		}
	})
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req,res) {
	Blog.findById(req.params.id, function(err, blog) {
		if (err) {
			res.redirect("/blogs");
		}
		else {
			res.render("edit", {blog});
		}
	});
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req,res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
    	if (err) {
    		res.redirect('/blogs');
    	}
    	else {
    		res.redirect("/blogs/"+req.params.id);
    	}
    })
});

// DESTROY ROUTE
app.delete('/blogs/:id',function(req,res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
    	if (err) {
    		res.redirect("/blogs");
    	}
    	else {
    		res.redirect("/blogs");
    	}
    });
});

// LISTEN
app.listen(3000, function(req, res) {
	console.log("Blog is running on port 3000");
});
