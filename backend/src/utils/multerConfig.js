const multer = require('multer');
const fs = require('fs-extra');
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let type = req.params.type;
            let user_id = req.params.user_id;
            let path = `./uploads/${type}/${user_id}`;

            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }

            fs.mkdirsSync(path);
            callback(null, path);
        },
        filename: (req, file, callback) => {
            let title = req.params.title
            const fileExtension = path.extname(file.originalname).toLowerCase();
            callback(null, `${title}${fileExtension}`);
        }
    })
});

module.exports = upload