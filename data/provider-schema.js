const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const providerSchema = new Schema(
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

    verified: {
      type: Boolean,
      default: false,
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
  { collection: "testprovider" }
);

module.exports = providerSchema;
