const mongoose = require("mongoose");
const schema = require("./post-schema");
const model = mongoose.model("PostsModel", schema);
module.exports = model;
