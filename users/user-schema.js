const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    role: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    profile_pic: String,
    cover_pic: String,
    DOB: Date,
    description: String,
  },
  { collection: "users" }
);
module.exports = userSchema;
