const { getNews } = require("../utils/news_utils");

const showNews = async (req, res) => {
  console.log("we are connected");
  let articles = await getNews();
  res.render("index", {
    articles,
  });
};

module.exports = { showNews };
