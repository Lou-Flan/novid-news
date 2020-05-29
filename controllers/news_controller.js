// methods to call functions from utilities and send the responses back to the client
const {getNews} = require('../utils/news_utils')
// handles what comes back from DB calls that are defined in the utilities

// res.render(index, {articles})
const showNews = async (req, res) => {
    console.log("we are connected")
    const {cookies} = req
    console.log("Cookies", cookies);
    let cookieNames = Object.keys(cookies);
    console.log("COOKIE!!!!", cookieNames);
    let articles = await getNews()
    res.render('index', {
        articles
    })
}

// app.get('/', (req, res) => {
//     const {cookies} = req
//     console.log("Cookies", cookies);
//     let cookieNames = Object.keys(cookies);
//     console.log("COOKIE!!!!", cookieNames);
//   })

module.exports = {showNews}