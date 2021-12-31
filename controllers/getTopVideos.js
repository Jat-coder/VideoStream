const fs = require('fs');
const FileAppender = require('multer/lib/file-appender');

module.exports = (req,res)=>{
    let filesAvailable = [];
    fs.readdir('./uploads/',function(err,files){
        if(err){
            return console.log(err);
        }
        files.forEach(function(filename){
            filesAvailable.push(filename);
        })
        res.send({
            filesAvailable
        })
    })
}