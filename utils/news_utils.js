const api_key = require("dotenv").config();
const api = process.env.API_KEY;
const fetch = require("node-fetch");
const moment = require("moment");
const Words = require("../models/novid_words");

const getNews = async () => {
  const url = "https://newsapi.org/v2/top-headlines?country=au&pageSize=50&apiKey=" + api;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    const cleanedArticles = await articleCleaner(jsonData);
    return cleanedArticles;
  } catch (error) {
    console.log(error);
  }
};

const getWords = async () => {
  let result = await Words.find();
  let safeWords = [];
  let unSafeWords = [];

  result.forEach((word) => {
    word.type === "safe"
      ? safeWords.push(word.word)
      : unSafeWords.push(word.word);
  });

  return { safeWords, unSafeWords };
};

const articleCleaner = async (data) => {
  let articles = data.articles;

  let dbWords = await getWords();
  console.log("from the cleaner", dbWords);
  const safeWords = dbWords.safeWords;
  const unSafeWords = dbWords.unSafeWords;

  let cleanArticles = [];

  articles.forEach((article) => {
    let regex = new RegExp("\\b" + unSafeWords.join("|") + "\\b", "gi");
    article.redacted = false;

    if (!article.title || !article.description) {
      console.log("missing article title or description");
    } else if (article.title.match(regex) || article.description.match(regex)) {
      article.redacted = true;
    }
    article.title = article.title.replace(
      regex,
      safeWords[Math.floor(Math.random() * safeWords.length)]
    );
    article.description = article.description.replace(
      regex,
      safeWords[Math.floor(Math.random() * safeWords.length)]
    );
    article.publishedAt = moment(article.publishedAt).format("MMMM Do, h:mm a");
    cleanArticles.push(article);
  });
  return cleanArticles;
};

module.exports = { getNews, getWords };
