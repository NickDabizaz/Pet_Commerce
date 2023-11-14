
const express = require('express');
const commentController = require('../controllers/commentController.js');

const router = express.Router();

// Route untuk menambahkan comment
router.post('/', commentController.createComment);

// Route untuk menampilkan comment berdasarkan postingan yang di comment
router.get('/:postId', commentController.getCommentsByPostId);

// Route untuk menghapus comment
router.delete('/:commentId', commentController.deleteComment);

module.exports = router;
