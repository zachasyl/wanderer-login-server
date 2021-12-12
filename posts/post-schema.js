const mongoose = require('mongoose');
const schema = mongoose.Schema({
                                   user_Id: String,
                                   title: String,
                                   description: String,
                                   visit_date: Date,
                                   latitude: Number,
                                   longitude: Number,
                                   createdAt: Date,
                                   updatedAt: Date,
                               }, {timestamps: true, collection: 'posts'});
module.exports = schema;

