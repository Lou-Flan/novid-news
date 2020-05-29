const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Words = new Schema({
    word: String,
    type: String
});

module.exports = mongoose.model('Words', Words);
