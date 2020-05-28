const api_key = require('dotenv').config();
const api = process.env.API_KEY;
const fetch = require('node-fetch');
var moment = require('moment');
// API call in here

const getNews = async () => {
  const url = "https://newsapi.org/v2/top-headlines?country=au&apiKey=" + api;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    // function call here to redact and replace words
    const cleanedArticles = await articleCleaner(jsonData)
    return cleanedArticles
    
  } catch(error) {
      console.log(error)
  }
}

const articleCleaner = (data) => {
  let articles = data.articles;
  const safeWords = ["clown", "rainbow party", "butterfly", "hatchback", "puppy dog eyes", "satellite", "an ocean particle", "Uranus"]
  const unSafeWords = ["Coronavirus", "COVID"]

  let cleanArticles = []

  articles.forEach((article) => {
    // article.title = article.title.toLowerCase()
    // article.description = article.description.toLowerCase()
    
    let regex = new RegExp("\\b"+unSafeWords.join('|')+"\\b","gi")
    article.redacted = false;
      if(article.title.match(regex) || article.description.match(regex)){
        article.redacted = true;
      }
    article.title = article.title.replace(regex, safeWords[Math.floor(Math.random() * 7)])
    article.description = article.description.replace(regex, safeWords[Math.floor(Math.random() * 7)])
    article.publishedAt = moment(article.publishedAt).format("MMMM Do, h:mm a"); 
    cleanArticles.push(article)
    // console.log(cleanArticles)
  })
  return cleanArticles
}



// methods to access data from news API call and save articles into obj

// methods to call db to check for words then redact and replace words from the news articles before sending to controller to render

// hard code two arrays of safe words and banned words to use before connecting to db

module.exports = {getNews}