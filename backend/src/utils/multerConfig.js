// const multer = require("multer");
// const fs = require("fs-extra");
// const path = require("path");
// const models = require("../models");

// const upload = multer({
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5 MB in bytes
//   },
//   storage: multer.diskStorage({
//     destination: async (req, file, callback) => {
      
//     },
//     filename: async (req, file, callback) => {

      
//     },
//   }),
// });

// module.exports = upload;


const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");
const models = require("../models");

const upload = multer({
  limits: {
    fileSize: 1 * 1024 * 1024, // 1 MB in bytes
  },
  storage: multer.diskStorage({
    destination: async (req, file, callback) => {
      // ... (bagian destination tetap sama)
      let type = req.params.type;
      let path = ``;
      if (type === "profilpic") {
        path = `./uploads/${type}`;
      } else if (type === "post") {
        path = `./uploads/${type}`;
      } else if (type === "product") {
        path = `./uploads/${type}`;
      } else if (type === "store"){
        path = `./uploads/${type}`;
      }

      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
      }

      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: async (req, file, callback) => {
      // ... (bagian filename tetap sama)
      let type = req.params.type;
      let user_id = req.params.user_id;

      const latestProduct = await models.Product.findOne({
        where: {
          deletedAt: null,
        },
        order: [["product_id", "DESC"]],
        attributes: ["product_id"],
      });

      const latestPost = await models.Post.findOne({
        where: {
          deletedAt: null,
        },
        order: [["post_id", "DESC"]],
        attributes: ["post_id"],
      });

      const lastestStore = await models.Store.findOne({
        where : {
          deletedAt : null
        },
        order: [["store_id", "DESC"]],
        attributes: ["store_id"]
      })

      let product_id = 1;
      if (latestProduct) {
        product_id = latestProduct.dataValues.product_id + 1;
      }

      let post_id = 1;
      if (latestPost) {
        post_id = latestPost.dataValues.post_id + 1;
      }

      let store_id = 1;
      if(lastestStore){
        store_id = lastestStore.dataValues.store_id + 1;
      }

      const fileExtension = path.extname(file.originalname).toLowerCase();
      if (post_id != undefined && type === "post") {
        callback(null, `${post_id}.jpg`);
      } else if (user_id != undefined && type === "profilpic") {
        callback(null, `${user_id}.jpg`);
      } else if (product_id != undefined && type === "product") {
        callback(null, `${product_id}.jpg`);
      } else if(store_id != undefined && type === "store"){
        callback(null, `${store_id}.jpg`);
      }
    },
  }),
}).single("file"); // Ubah "file" sesuai dengan nama field pada form HTML

module.exports = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Kesalahan dari Multer (termasuk batasan ukuran file)
      res.status(400).json({
        error: "Ukuran file terlalu besar. Maksimum 1 MB diizinkan.",
      });
    } else if (err) {
      // Kesalahan lainnya
      res.status(500).json({
        error: "Terjadi kesalahan saat mengunggah file.",
      });
    } else {
      // Tidak ada kesalahan, lanjut ke middleware berikutnya
      next();
    }
  });
};

