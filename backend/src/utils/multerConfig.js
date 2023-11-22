const multer = require('multer');
const fs = require('fs-extra');
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let type = req.params.type;
            let user_id = req.params.user_id;
            let path = ``;
            if(type === "profilpic"){
                path = `./uploads/${type}`
            }else if(type === "post"){
                path = `./uploads/${type}/${user_id}`;
            }else if(type === "product"){
                path = `./uploads/${type}/${user_id}`;
            }

            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }

            fs.mkdirsSync(path);
            callback(null, path);
        },
        filename: (req, file, callback) => {
            let title = req.params.title
            let user_id = req.params.user_id;
            const fileExtension = path.extname(file.originalname).toLowerCase();
            if(title != undefined){
                callback(null, `${title}${fileExtension}`);
            }else if(title == undefined){
                callback(null, `${user_id}${fileExtension}`);
            }
        }
    })
});

module.exports = upload