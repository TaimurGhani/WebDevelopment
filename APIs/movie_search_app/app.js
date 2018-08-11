const express = require("express");
const app = express();
const request = require("request")
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("search");
});

app.get('/results', function(req, res) {
	var movieName = req.query.movieName;
    request('http://www.omdbapi.com/?s=' + movieName + '&apikey=thewdb', function(error, response, body) {
    	if (!error && response.statusCode === 200) {
    		const data = JSON.parse(body);
    		res.render('results', {data});
    	}
    });
});

app.listen(3000, function() {
	console.log("Movie app has started on port 3000");
});

