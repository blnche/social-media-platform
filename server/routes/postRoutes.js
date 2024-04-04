const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createPost, getPosts } = require('../controllers/postController');

router.use(authMiddleware);

router.post('/', createPost);

router.get('/', getPosts);

module.exports = router;