const mongoose = require('mongoose');
const providerSchema = mongoose.Schema({
    kind: String,
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    verified: {type: Boolean, defaultValue: false},
}, {collection: 'providers'});
module.exports = providerSchema;