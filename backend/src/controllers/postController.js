const multer = require('multer');
const Post = require('../models/Post'); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = Date.now().toString(); 
    req.folderName = folderName; 
    cb(null, `./uploads/${folderName}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).single('image'); 

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  
const addPost = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const { title, user_id } = req.body;
    if (!title || !user_id) {
      return res.status(400).json({ message: 'Title and user_id are required' });
    }

    const image = req.file; 
    const imagePath = `uploads/${req.folderName}/${image.filename}`;

    try {
      const post = await Post.create({
        title: title,
        image: imagePath,
        user_id: user_id
      });
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, user_id } = req.body;
  if (!title || !user_id) {
    return res.status(400).json({ message: 'Title and user_id are required' });
  }

  try {
    const [updated] = await Post.update({ title, user_id }, {
      where: { post_id: postId }
    });
    if (updated) {
      const updatedPost = await Post.findByPk(postId);
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const deleted = await Post.destroy({
      where: { post_id: postId }
    });
    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}
