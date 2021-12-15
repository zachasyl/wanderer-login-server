const model = require("./provider-model");

const updateProviderVerified = (id) =>
  model.updateOne({ _id: id }, { $set: { verified: true } });

const rejectProvider = (id) => model.deleteOne({ _id: id });

const getAllProviders = () => model.find({ verified: false });

module.exports = {
  updateProviderVerified,
  rejectProvider,
  getAllProviders,
};
