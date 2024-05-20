const express = require('express');
const { uploadImage, uploadVideo } = require('../config/multer');

const fileRouter = express.Router();

// @desc: Upload
// @method: POST /api/upload/image
// @access: Public
fileRouter.route('/image').post(uploadImage.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error("No file uploaded");
        }

        res.status(200).json({
            fileName: req.file.filename,
            filePath: `${process.env.MEDIA_URL}/media/images/${req.file.filename}`, // Use a proper file path for serving
        });

    } catch (error) {
        console.log(error);
    }

});

// @desc: Upload
// @method: POST /api/upload/video
// @access: Public
fileRouter.route('/video').post(uploadVideo.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error("No file uploaded");
        }

        res.status(200).json({
            fileName: req.file.filename,
            filePath: `${process.env.MEDIA_URL}/media/videos/${req.file.filename}`, // Use a proper file path for serving
        });

    } catch (error) {
        console.log(error);
    }

});

module.exports = fileRouter;