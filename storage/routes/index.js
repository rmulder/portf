var express = require('express');
var router = express.Router();

// GET /(index)
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Index' });
});

module.exports = router;
