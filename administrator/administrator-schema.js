const mongoose = require('mongoose');
const administratorSchema = mongoose.Schema({
    kind: String,
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
}, {collection: 'administrators'});
module.exports = administratorSchema;