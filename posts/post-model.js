const mongoose = require('mongoose');
const schema = require('./post-schema');
const model = mongoose.model('PostModel', schema);
module.exports = model;

