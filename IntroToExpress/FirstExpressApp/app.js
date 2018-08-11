const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!")
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
	let subreddit = req.params.subredditName;
	res.send("WELCOME TO " + subreddit.toUpperCase() + " SUBREDDIT!!!")
});

app.get("*", function(req, res) {
	res.send("YOU ARE A STAR!!!");
});


// Tell Express to listen for requests (start server)
app.listen(3000, () => {console.log("Serving demo on port 3000")});