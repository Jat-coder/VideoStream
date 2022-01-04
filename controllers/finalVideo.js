module.exports = async function (req, res) {
  //save a thumbnail for the same

  const query = req.videoQuery;
  query.title = req.body.title;
  query.location = `${req.user.id}/${req.videoQuery.id}`;
  query.channelName = req.user.name;
  query.save();
  res.send(query);
};
