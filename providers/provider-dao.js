const providerModel = require('./provider-model');

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


module.exports = {
    findByUsername,
    findAllProviders,
    findProviderById,
    findByUsernameAndPassword,
    createProvider,
    updateProvider
};

