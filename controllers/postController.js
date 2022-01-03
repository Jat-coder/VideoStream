const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/" + req.user.id + "/" + req.videoQuery.id);
  },
  filename: function (req, file, cb) {
    cb(null, "1.mp4");
  },
});
module.exports = multer({
  fileFilter: function (req, file, cb) {
    if ("video/mp4" === file.mimetype) {
      cb(null, true);
    }
    cb(null, false);
  },
  storage: storage,
});
