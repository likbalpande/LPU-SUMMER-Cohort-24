const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${Math.floor(Math.random() * 100)}-${file.originalname}`);
    },
});

// Create the multer instance
module.exports = multer({ storage: storage });
