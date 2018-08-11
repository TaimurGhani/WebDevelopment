const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {thing});
});

app.get("/posts", function(req, res) {
	let posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Post 2", author: "Bobby"},
		{title: "Post 3", author: "Jill"}
	];
	res.render("posts", {posts});
});

app.listen(3000, function() {
	console.log("Server is listening on port 3000");
});
