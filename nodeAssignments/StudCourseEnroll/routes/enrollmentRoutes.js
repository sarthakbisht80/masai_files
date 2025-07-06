const express = require('express');
const router = express.Router();
const { enrollStudent } = require('../Controllers/enrollmentController');

router.post('/', enrollStudent);

module.exports = router;
