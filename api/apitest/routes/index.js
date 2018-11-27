var express = require('express');
var router = express.Router();
var foodcController = require('../controller/foodcontroller');
/* GET home page. */
// router.get('/:page', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', foodcController.FoodPage);
//router.get('/:page', foodcController.FoodPage);
module.exports = router;
