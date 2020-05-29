const Word = require("../models/word")

const getAllWords1 = async function() {
  const words = await Word.find();
  return words;
}

const getAllWords2 = function(cb) {
  Word.find().exec((err, words) => {
    if (err) throw new Error(err);
    cb(words);
  });
}

module.exports = {getAllWords1, getAllWords2}
