const fs = require("fs");

module.exports = function (req, res) {
  videoName = req.params.id;
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const videoPath = `./uploads/${videoName}`;
  const videoSize = fs.statSync(videoPath).size;

  //parse range
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    "content-range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
};
