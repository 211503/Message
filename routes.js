const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/auth');

// Public and private routes
router.post('/', authMiddleware, messageController.createMessage);
router.get('/', messageController.getPublicMessages);
router.get('/private', authMiddleware, messageController.getPrivateMessages);

module.exports = router;
