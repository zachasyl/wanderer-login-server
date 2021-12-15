const mongoose = require("mongoose");
const providerSchema = require("./provider-schema");
const providerModel = mongoose.model("ProviderModel", providerSchema);
module.exports = providerModel;
