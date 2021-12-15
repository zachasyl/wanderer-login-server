const mongoose = require("mongoose");
const schema = require("./provider-schema");
const model = mongoose.model("ProvidersModel", schema);
module.exports = model;
