const mongoose = require('mongoose');
const providerSchema = mongoose.Schema({
    role: String,
    email: String,
    firstName: String,
    lastName: String,
    DOB: String,
    address: String,
    city: String,
    phone: String,
    password: String,
    creditCard: Number,
    nameOnCard: String,
    expiry: String,
    verified: {type: Boolean, defaultValue: false},
}, {collection: 'providers'});
module.exports = providerSchema;