const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  wrong: Number,
  blockedUntil: Number,
});
const Usermodel = mongoose.model("user", userschema);
module.exports = { Usermodel };
