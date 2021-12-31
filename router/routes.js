const express = require('express');
const  path  = require('path');
const router = express.Router();
const videoController = require('../controllers/getVideo');
const topVideoController = require('../controllers/getTopVideos');
const upload = require('../controllers/postController');



router.post('/',upload.single('uploaded'),function(req,res){
console.log(req.file);
res.sendFile(path.resolve('./View/index.html'))
})

router.use(express.static(path.join(__dirname,'../View/')))

router.get('/video/:id?',videoController)
router.get('/topVideos',topVideoController)

module.exports= router;