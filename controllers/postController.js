const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        const uniquePrefix = Date.now()+'-'+Math.round(Math.random()*1E9);
        console.log(uniquePrefix)
        cb(null,uniquePrefix+'-'+file.originalname);
    },
})
module.exports = multer({
    fileFilter:function(req,file,cb){
        if('video/mp4'===file.mimetype){
            cb(null,true);
        }
        cb(null,false);
    },
    storage:storage
})
