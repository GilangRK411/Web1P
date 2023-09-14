var express = require('express');

var testController = require('../src/test/testController');
const router = express.Router();

router.route('/test/login').post(testController.loginUserControllerfn);
router.route('/test/create').post(testController.createTestControllerfn);

module.exports = router;
