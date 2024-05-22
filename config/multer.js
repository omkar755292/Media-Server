const multer = require('multer');
const path = require('path');

// Set storage engine for images
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../backup/media/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    },
});


// Set storage engine for videos
const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../backup/media/videos');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    },
});

// Set storage engine for document
const documentStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../backup/media/documents');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Multer upload for images
const uploadImage = multer({
    storage: imageStorage,
    limits: { fileSize: 10000000 }, // Limit file size to 10MB
});

// Multer upload for videos
const uploadVideo = multer({
    storage: videoStorage,
    limits: { fileSize: 50000000 }, // Limit file size to 50MB
});

// Multer upload for doucument
const uploadDocument = multer({
    storage: documentStorage,
    limits: { fileSize: 50000000 }, // Limit file size to 50MB
});

module.exports = { uploadImage, uploadVideo, uploadDocument };