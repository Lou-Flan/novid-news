const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// database schema to add word pairs

// an array of safe words 
// an array of banned words

// e.g 
const Words = new Schema({
    safe_words: [{
        safe: String
    }],
    prohibited_words: [{
        prohibited: String
    }]
});


module.exports = mongoose.model('Words', Words);