// middleware/upload.js
const multer = require('multer');
const path = require('path');

// Storage engine setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Where files will be saved
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// File filter (optional - only allow PDF/DOC/DOCX)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Only .pdf, .doc, .docx files are allowed!");
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
