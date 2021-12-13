const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  role: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  DOB: String,
  address: String,
  city: String,
  phone: String,
  description: String,


}, {collection: 'users'});
module.exports = userSchema;

