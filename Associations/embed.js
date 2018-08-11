let mongoose = require("mongoose"),
	Post = require("./models/post"),
	User = require("./models/user");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true });



// let newUser = new User({
// 	email: "hermione@hogwarts.edu",
// 	name: "Hermione Granger"
// });

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Mix some stuff together"
// })

// newUser.save(function(err, user) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(user);
// 	}
// });

// let newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious"
// });
// newPost.save(function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(post);
// 	}
// });

// User.findOne({ name: "Hermione Granger" }, function(err, user) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		user.posts.push({
// 			title: "3 Things I really hate",
// 			content: "Voldemort Voldemort Voldemort"
// 		});
// 		user.save(function(err, user){
// 			if (err) {
// 				console.log(err);
// 			}
// 			else {
// 				console.log(user);
// 			}
// 		});
// 	}
// });


