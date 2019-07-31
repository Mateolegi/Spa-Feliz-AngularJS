var express = require('express');
var router = express.Router();
var booking_controller = require('../controllers/bookingController');

router.post('/', booking_controller.booking_create);

module.exports = router;
