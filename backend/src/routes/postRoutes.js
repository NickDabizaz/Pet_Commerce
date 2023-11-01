const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Folder tempat menyimpan file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nama file baru
  }
});

const upload = multer({ storage: storage });

router.get('/', postController.getAllPosts);

router.post('/',  postController.addPost);

router.get('/:id', postController.getPostById);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;
