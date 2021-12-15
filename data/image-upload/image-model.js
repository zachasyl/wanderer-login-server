const mongoose = require("mongoose");
const schema = require("./image-schema");
const model = mongoose.model("ImageModel", schema);
module.exports = model;
