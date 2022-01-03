const jwt = require('jsonwebtoken');
async function getJWT(id){
    console.log('from jwt sign',id)
const shhh= process.env.secret;
    return new Promise((resolve,reject)=>{
        jwt.sign(id,shhh,(err,token)=>{
            if(err){
                reject('failed');
            }
            else{
                resolve(token);
            }
        })
    })
}
async function verifyJWT(token){
const shhh= process.env.secret;
    return new Promise((resolve,reject)=>{
        jwt.verify(token,shhh,function(err,decoded){
            if(err){
                reject('couldn\'t verify token');
            }
            else{
                resolve(decoded);
            }
        })
    })
}
module.exports.verifyJWT = verifyJWT;
module.exports.getJWT = getJWT;