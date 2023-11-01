const multer = require("multer");
const fs = require("fs"); //filesystem
const path = require("path");
const Post = require('../models/Post');

let id = 1;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // console.log(req);
    // console.log(file);
    const folderName = `uploads/${req.user_id}`;

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }

    callback(null, folderName);
  },
  filename: (req, file, callback) => {
    console.log(file);
    const fileExtension = path.extname(file.originalname).toLowerCase();

    // callback(null, "tes.jpg");

    // memberi nama file sesuai dengan nama file asli yang diupload
    // callback(null, file.originalname);
    if (file.fieldname == "image") {
      callback(null, `${id}${fileExtension}`);
      id++
    } else {
      callback(null, false);
    }
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000, // dalam byte jadi 1000 = 1kb 1000000 = 1mb
  },
  fileFilter: (req, file, callback) => {
    // buat aturan dalam bentuk regex, mengenai extension apa saja yang diperbolehkan
    const rules = /jpeg|jpg|png|gif/;

    const fileExtension = path.extname(file.originalname).toLowerCase();
    const fileMimeType = file.mimetype;

    const cekExt = rules.test(fileExtension);
    const cekMime = rules.test(fileMimeType);

    if (cekExt && cekMime) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(
        new multer.MulterError(
          "Tipe file harus .gif, .png, .jpg atau .jpeg",
          file.fieldname
        )
      );
    }
  },
});

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
  req.user_id = req.body.user_id
  console.log(req.user_id);
  const uploadingFile = upload.single("image");
  uploadingFile(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send((err.message || err.code) + " pada field " + err.field);
    }

    const { title, user_id } = req.body;
    if (!title || !user_id) {
      return res.status(400).json({ message: 'Title and user_id are required' });
    }

    try {
      const post = await Post.create({
        title: title,
        user_id: user_id
      });
      // res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return res.status(200).json("successful");

  });

  // upload(req, res, async function (err) {
  //   if (err) {
  //     return res.status(500).json({ message: err.message });
  //   }

  //   const { title, user_id } = req.body;
  //   if (!title || !user_id) {
  //     return res.status(400).json({ message: 'Title and user_id are required' });
  //   }

  //   const image = req.file; 
  //   const imagePath = `uploads/${req.folderName}/${image.filename}`;

  //   try {
  //     const post = await Post.create({
  //       title: title,
  //       image: imagePath,
  //       user_id: user_id
  //     });
  //     res.json(post);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });
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
