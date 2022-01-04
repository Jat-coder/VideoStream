const userModel = require("../Model/userModel");
const { getJWT } = require("../utils/getJWT");
module.exports = async function signup(req, res) {
  const user = new userModel({
    name: req.body.name,
    password: req.body.password,
    mail: req.body.mail,
  });
  user.encryptPassword();
  const id = user.id;
  const token = await getJWT(id);
  await user.save();
  res.send(token);
};
