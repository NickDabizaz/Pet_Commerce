// controllers/postController.js

const Post = require('../models/Post'); 

const getAllPosts = async (req, res) => {
  // Get posts
}

const getPostById = async (req, res) => {
  // Get post by id
}
  
const addPost = async (req, res) => {

  // Upload image
  const image = req.files.image; 
  const uploadPath = '/uploads/' + image.name;

  image.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Create post with image url
    const post = await Post.create({
      ...req.body,
      image: uploadPath
    });

    res.json(post);
  })

}

const updatePost = async (req, res) => {
  // Update post by id
}

const deletePost = async (req, res) => {
  // Delete post by id 
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}