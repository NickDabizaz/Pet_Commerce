const multer = require('multer');
const fs = require('fs-extra');
const path = require("path");
const models = require("../models");

const upload = multer({
    storage: multer.diskStorage({
        destination: async (req, file, callback) => {
            let type = req.params.type;
            let user_id = req.params.user_id;
            let path = ``;
            if (type === "profilpic") {
                path = `./uploads/${type}`
            } else if (type === "post") {
                path = `./uploads/${type}`;
            } else if (type === "product") {
                path = `./uploads/${type}`;
            }

            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }

            fs.mkdirsSync(path);
            callback(null, path);
        },
        filename: async (req, file, callback) => {
            let user_id = req.params.user_id;
            const latestProduct = await models.Product.findOne({
                where: {
                    deletedAt: null
                },
                order: [
                    ['product_id', 'DESC']
                ],
                attributes: ['product_id']
            });

            const latestPost = await models.Post.findOne({
                where: {
                    deletedAt: null
                },
                order: [
                    ['post_id', 'DESC']
                ],
                attributes: ['post_id']
            });

            console.log(latestProduct.dataValues.post_id);
            let product_id = latestProduct.dataValues.product_id + 1;
            let post_id = latestPost.dataValues.post_id + 1;
            console.log(post_id);

            const fileExtension = path.extname(file.originalname).toLowerCase();
            if (post_id != undefined) {
                callback(null, `${post_id}${fileExtension}`);
            } else if (user_id != undefined) {
                callback(null, `${user_id}${fileExtension}`);
            } else if(product_id != undefined){
                callback(null, `${product_id}${fileExtension}`);
            }
        }
    })
});

module.exports = upload