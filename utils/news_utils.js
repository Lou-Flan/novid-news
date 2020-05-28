const api_key = require('dotenv').config();
const api = process.env.API_KEY;
const fetch = require('node-fetch');
// API call in here

const getNews = async () => {
  const url = "https://newsapi.org/v2/top-headlines?country=au&apiKey=" + api;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData)
  } catch(error) {
      console.log(error)
  }
}





// fetch("http://www.localhost:5000/",{
//         method: 'GET',
//         mode: "no-cors",
//         cache: "no-cache", 
//         credentials: "same-origin", 
//         headers: {"Content-Type": "application/json"}
//       })
//     .then(res=>{
//         console.log("res1",res)
//         return res.text();
//     })
//     .then(res=>{
//         console.log("res2",res)

//     })
//     .catch(res=>{
//         console.log("Exception : ",res);
//     })


// use encrypted env key API_KEY

// methods to access data from news API call and save articles into obj

// methods to call db to check for words then redact and replace words from the news articles before sending to controller to render

// hard code two arrays of safe words and banned words to use before connecting to db

module.exports = {getNews}