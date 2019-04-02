var express = require('express');
var router = express.Router();
var Sort = require('../public/javascripts/articles').sort;
var GetStringToDisplay = require('../public/javascripts/articles').getStringToDisplay;

/* POST list of article */
router.post('/result', function(req, res) {
  try {
      var boxedArticles = Sort(req.body.articles);
      res.render('result', {title: 'XspeedIt', list: GetStringToDisplay(boxedArticles)});
  } catch (e) {
      res.render('error', {message: e.message, error: {status: 500, stack: e.stack}});
  }
});

module.exports = router;
