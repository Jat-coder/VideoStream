const req = require("express/lib/request");
const videoModel = require("../Model/videoModel");
const makeDir = require("make-dir");
module.exports = async function (req, res, next) {
  const video = new videoModel({
    userId: req.user.id,
  });
  req.videoQuery = video;
  //make a directory--------------
  await makeDir("./uploads/" + req.user.id + "/" + req.videoQuery.id);
  next();
};
