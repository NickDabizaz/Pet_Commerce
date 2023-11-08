const { where } = require("sequelize");
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

let tempArrayLengkap = []
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    posts.map(async (item) => {
      const user = await User.findOne({ where: { user_id: item.user_id } })
      const like = await PostLike.count({
        where: {
          post_id: item.post_id
        }
      });
      const share = await PostShare.count({
        where: {
          post_id: item.post_id
        }
      });

      let tempArray = []
      const comment = await Comment.findAll({ where: { post_id: item.post_id } })
      const tempComment = comment.map(async (item) => {
        const tempUser = await User.findOne({ where: { user_id: item.user_id } })
        let temp = {
          nama_pengomen: tempUser.name,
          komentar: item.comment_text,
          waktu_komentar: item.comment_time,
        }
        tempArray.push(temp)
      })

      let temp2 = {
        post_id: item.post_id,
        nama_pengepost: user.name,
        jumlah_like: like,
        jumlah_share: share,
        comment: tempArray
      }

      console.log({temp2});
      if(tempArrayLengkap.length > 0){
        const check = tempArrayLengkap.filter((item) => item.post_id === temp2.post_id)
        console.log({check});
        if(check.length == 0 ){
          tempArrayLengkap.push(temp2)
        }
      }
      if(tempArrayLengkap.length == 0){
        tempArrayLengkap.push(temp2)
      }

      console.log({ tempArrayLengkap });

    })

    res.status(200).json(tempArrayLengkap);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        }
      ]
    });
    
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