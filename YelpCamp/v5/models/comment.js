const mongoose = require('mongoose');

// COMMENT SCHEME SETUP
let commentSchema = new mongoose.Schema({
    text: String,
    author: String
});

module.exports = mongoose.model("Comment", commentSchema);