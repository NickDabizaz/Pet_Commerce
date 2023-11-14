
const express = require('express');
const {getLikesByPostId,likePost,unlikePost} = require('../controllers/likeController');

const router = express.Router();

router.get('/:post_id', getLikesByPostId);
router.post('/', likePost);
router.delete('/', unlikePost);

module.exports = router;