const express = require("express");
const path = require("path");
const router = express.Router();
const videoController = require("../controllers/getVideo");
const topVideoController = require("../controllers/getTopVideos");
const upload = require("../controllers/postController");
const authenticationRoute = require("./authenticationRoute");
const authenticate = require("../controllers/authenticate");
const vidToDB = require("../controllers/vidToDB");
const finalVideo = require("../controllers/finalVideo");
router.use(authenticationRoute);

router.post(
  "/",
  authenticate,
  vidToDB,
  upload.single("uploaded"),
  finalVideo
);

router.use(express.static(path.join(__dirname, "../View/")));

router.get("/video/:id?", videoController);
router.get("/topVideos", topVideoController);
module.exports = router;
