const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },

    last_name: {
      type: String,
      required: true,
    },

    profile_pic: {
      type: String,
    },

    cover_pic: {
      type: String,
    },

    birthdate: {
      type: Date,
      trim: true,
    },

    email: {
      type: String,
      required: true,
    },

    description: String,
  },
  { collection: "testimg" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
