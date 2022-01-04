const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  mail: String,
  name: String,
  password: String,
  subscribers: Number,
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "video" }],
});

userSchema.methods.encryptPassword = function () {
  this.password = "poopie";
  console.log(this.password);
};
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
