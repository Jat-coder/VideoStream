const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    name:String,
    location:String,//userId/videoId/1.jpeg,1.mp4
    ratings:String,
    channelName:String,
    userId:{ref:'User',type:mongoose.Schema.Types.objectId}
});

const videoModel = mongoose.model('video',videoSchema)