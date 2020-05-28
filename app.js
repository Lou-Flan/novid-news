// requirements
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const router = express.Router();
const { showNews } = require('./controllers/news_controller');

const port = process.env.PORT || 3010;

// app.use
const app = express();
app.use(bodyParser.json());

// db connection
//const dbConn = process.env.MONGODB_URI || 'mongodb://localhost:3010/

// set views engine to handlebars
app.set('view engine', 'hbs')
app.set('views', './public/templates')

app.use(express.static('./public'))

// put news routes in here as user can only make a get request on news?
app.use('/', router);
router.get('/', showNews);

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

// app.listen
app.listen(port, () => {
    console.log(`News app listening on port ${port} HELL YEAH`);
});