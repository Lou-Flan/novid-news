// methods to call functions from utilities and send the responses back to the client
const {getNews} = require('../utils/news_utils')
// handles what comes back from DB calls that are defined in the utilities

// res.render(index, {articles})
const showNews = (req, res) => {
    console.log("we are connected")
    res.send("this is a page")
}

module.exports = {showNews}