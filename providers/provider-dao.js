const providerModel = require('./provider-model');
const model = require("./post-model");

const findAllProviders = () =>
    providerModel.find({verified: false});

const findProviderById = (id) =>
    providerModel.findById(id);


const findByUsernameAndPassword = ({email, password}) =>
    providerModel.findOne({email, password});

const findByUsername = ({email}) =>
    providerModel.findOne({email});

const createProvider = (provider) =>
    providerModel.create(provider);

const updateProvider = (id, provider) =>
    providerModel.updateOne({_id: id}, {
        $set: provider
    });

const updateProviderVerified = (id) =>
    model.updateOne({ _id: id }, { $set: { verified: true } });

const rejectProvider = (id) => model.deleteOne({ _id: id });

const findAllUnVerifiedProviders = () => model.find({ verified: false });


module.exports = {
    findByUsername,
    findAllProviders,
    findProviderById,
    findByUsernameAndPassword,
    createProvider,
    updateProvider,
    updateProviderVerified,
    rejectProvider,
    findAllUnVerifiedProviders
};
