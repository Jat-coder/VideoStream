const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail:String,
    name:String,
    password:String,
    subscribers:Number,
    following:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    videos:[{type:mongoose.Schema.Types.ObjectId,ref:'video'}]
});

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;