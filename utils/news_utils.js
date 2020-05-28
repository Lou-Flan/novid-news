const api_key = require('dotenv').config();
const api = process.env.API_KEY;
const fetch = require('node-fetch');
// API call in here

const getNews = async () => {
  const url = "https://newsapi.org/v2/top-headlines?country=au&apiKey=" + api;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    // function call here to redact and replace words
    const cleanedArticles = await articleCleaner(jsonData)
    console.log(jsonData)
    return cleanedArticles
    
  } catch(error) {
      console.log(error)
  }
}

const articleCleaner = (data) => {
  let articles = data.articles;
  const safeWords = ["clown", "flower", "butterfly", "hatchback", "puppy", "satellite", "ocean", "Uranus"]
  const unSafeWords = ["corona", "covid", "deaths", "sick", "infections", "covid-19", "vaccination", "trump", "donald", "masks", "health", "climate", "virus", "Art"]

  articles.forEach((article) => {
    let { title, description, url, publishedAt } = article;

    unSafeWords.forEach((word, index) => {
      // console.log(word)
      if (title.includes(word)){
        // console.log(title)
        let wordRegex = new RegExp(word, "gmi");
        title = title.replace(wordRegex, safeWords[Math.floor(Math.random() * 20)])
        // console.log(title)
      }
      if (description.includes(word)){
        // console.log(description)
        let wordRegex = new RegExp(word, "gmi");
        description = description.replace(wordRegex, safeWords[Math.floor(Math.random() * 8)])
        // console.log(description)
      }
    })
  })
  return articles
  // return something here back to getNews
}
// methods to access data from news API call and save articles into obj

// methods to call db to check for words then redact and replace words from the news articles before sending to controller to render

// hard code two arrays of safe words and banned words to use before connecting to db

module.exports = {getNews}