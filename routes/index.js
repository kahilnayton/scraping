var express = require('express');
var router = express.Router();
const getResults = require("../scraper");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
  const result = await getResults();
  res.render('index', result)
  } catch(err) {
    console.log('error in index.js')
  }
});

module.exports = router;
