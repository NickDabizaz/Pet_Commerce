const { Post, User, Comment, PostLike, PostShare } = require("../models");

const addPost = async (req, res) => {
  const { title, user_id } = req.body;

  try {
    const post = await Post.create({
      title,
      user_id
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    const tempArray = []
    const tempArrayLengkap = []
    posts.map(async (item) => {
      const user = await User.findOne({ where: { user_id: item.user_id } })
      const like = await PostLike.count({
        where: {
          post_id : item.post_id
        }
      });
      const share = await PostShare.count({
        where: {
          post_id : item.post_id
        }
      });
      const temp = {
        post_id: item.post_id,
        nama_pengepost: user.name,
        jumlah_like: like,
        jumlah_share: share,
        
      }
    })
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, user_id } = req.body;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = title;
    post.user_id = user_id;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.destroy();

    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};