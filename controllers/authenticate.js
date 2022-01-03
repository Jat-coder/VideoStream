const userModel = require('../Model/userModel');
const {verifyJWT} = require('../utils/getJWT')
module.exports = async function authenticate(req,res,next){
    const token = req.headers.authorization.split(' ')[1];
    const id = await verifyJWT(token);
    const user =await userModel.findOne({_id:id});
    req.body.user = user;
    next();
}