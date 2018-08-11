const express = require("express");
app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
	let animal = req.params.animal.toLowerCase();
	const sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		cat: "Meow"
	};
	res.send("The " + animal + ", says '" + sounds[animal] + "'");
});

app.get("/repeat/:word/:numOfTimes", function(req, res) {
	let word = req.params.word + " ";
	let numOfTimes = req.params.numOfTimes;
	res.send(word.repeat(numOfTimes));
});

app.get("*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
	console.log("App running on port 3000");
});