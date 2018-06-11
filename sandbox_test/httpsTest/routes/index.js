const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('*', (req, res, next) =>
{
// res.send("Hello, HTTPS World");
  res.render('index', { title: 'HTTPS World' });
});

module.exports = router;
