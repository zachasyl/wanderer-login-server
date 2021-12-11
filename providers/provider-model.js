const mongoose = require('mongoose');
const userSchema = require('./provider-schema');
const providerModel = mongoose
    .model('ProviderModel', userSchema);
module.exports = providerModel;
