import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

//Initialize storage engine from multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    // Formatting that will be unique to each file upload, in case two files with the same name are uploaded
    // fieldname of image with the time it was uploaded, path retrieves the format of the image (PNG or JPG) from the file's original name
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

/**
 * Multer will allow for any file type to be stored, but we only want specific file types.
 * checkFileType is a custom function that checks the type of the uploaded file
 */

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb("Upload must be an image");
  }
}

// Middleware that stores file that was uploaded, with checkFileType function for type check
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
