const express = require('express');
const { getUserDashboard } = require('../controllers/userController');
const { auth, requireRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', auth(), requireRole('user', 'admin'), getUserDashboard);

module.exports = router;
