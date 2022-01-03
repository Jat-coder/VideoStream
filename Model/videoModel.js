const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    name:String,
    location:String,//userId/videoId/1.jpeg,1.mp4
    ratings:String,
    channelName:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});

const videoModel = mongoose.model('video',videoSchema)
module.exports = videoModel;