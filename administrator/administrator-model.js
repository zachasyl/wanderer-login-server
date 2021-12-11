const mongoose = require('mongoose');
const userSchema = require('./administrator-schema');
const administratorModel = mongoose
    .model('ProviderModel', userSchema);
module.exports = administratorModel;
