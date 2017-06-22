var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
/* GET home page. */
router.get('/chat', function(req, res, next) {
    res.render('chat', { title: 'Express' });
});

/* GET home page. */
router.get('/prat', function(req, res, next) {
    res.render('prat', { title: 'Express' });
});
/* GET home page. */
router.get('/buscaminas', function(req, res, next) {
    res.render('buscaminas', { title: 'Express' });
});
/* GET home page. */
router.get('/snake', function(req, res, next) {
    res.render('snake', { title: 'Express' });
});
/* GET home page. */
router.get('/losk', function(req, res, next) {
    res.render('losk', { title: 'Express' });
});
module.exports = router;
