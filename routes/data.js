var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send( 'Express1 FreeMan' );
  res.json({data:123})
});
router.get('/a', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send( 'Express1 FreeMan' );
  res.json({data:1234})
});

module.exports = router;
