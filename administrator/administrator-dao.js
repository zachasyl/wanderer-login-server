const providerModel = require('./administrator-model');

const findAllUsers = () =>
    providerModel.find();

const findUserById = (userId) =>
    providerModel.findById(userId);

const findByUsernameAndPassword = ({username, password}) =>
    providerModel.findOne({username, password});

const findByUsername = ({username}) =>
    providerModel.findOne({username});

const createUser = (user) =>
    providerModel.create(user);

const updateUser = (user) =>
    providerModel.updateOne({_id: user._id}, {
        $set: user
    });

const deleteUser = (userId) =>
    providerModel.deleteOne({_id: userId});

module.exports = {
    findByUsername, findAllUsers, findUserById,
    findByUsernameAndPassword,
    createUser, updateUser, deleteUser
};
