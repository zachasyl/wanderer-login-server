const mongoose = require("mongoose");
const schema = require("./post-schema");
const model = mongoose.model("PostsaModel", schema);
module.exports = model;
