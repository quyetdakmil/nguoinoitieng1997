var express = require('express');
var router = express.Router();
var controller = require('../controllers/celebrities');

/* GET home page. */
router.get('/', controller.home);

module.exports = router;
