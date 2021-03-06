const providerModel = require('./provider-model');

const findAllProviders = () =>
    providerModel.find({verified: false});

const findProviderById = (id) =>
    providerModel.findById(id);

const findProviderByUserId = (id) =>
    providerModel.findOne({user_Id: id});

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
    providerModel.updateOne({ _id: id }, { $set: { verified: true } });

const rejectProvider = (id) => providerModel.deleteOne({ _id: id });

const findAllUnVerifiedProviders = () => providerModel.find({ verified: false });


module.exports = {
    findByUsername,
    findAllProviders,
    findProviderById,
    findProviderByUserId,
    findByUsernameAndPassword,
    createProvider,
    updateProvider,
    updateProviderVerified,
    rejectProvider,
    findAllUnVerifiedProviders
};
