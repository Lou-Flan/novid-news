// API call in here
// use encrypted env key API_KEY

// methods to access data from news API call and save articles into obj

// methods to call db to check for words then redact and replace words from the news articles before sending to controller to render
const getNews = () => {
  console.log("this database doesn't exist")  
}
// hard code two arrays of safe words and banned words to use before connecting to db

module.exports = {getNews}