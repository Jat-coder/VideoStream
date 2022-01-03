const userModel = require("../Model/userModel");
const {getJWT} = require("../utils/getJWT");

module.exports = async function signin(req,res){
    const mail = req.body.mail;
    const pass = req.body.password;
    const user = await userModel.findOne({mail:mail});
    const token = await getJWT(user.id);
    res.send(token);
}