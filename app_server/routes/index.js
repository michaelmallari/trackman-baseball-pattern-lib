var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/main-ctrl');

/* GET home page. */
router.get('/', homeCtrl.index);

module.exports = router;
