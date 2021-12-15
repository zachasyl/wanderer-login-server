const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    imageName: {
      type: String,
      default: "none",
      required: true,
    },
    imageData: {
      type: String,
      required: true,
    },
  },
  { collection: "testimg" }
);

module.exports = schema;
