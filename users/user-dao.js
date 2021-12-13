const userModel = require('./user-model');

const findAllUsers = () =>
    userModel.find();

const findUserById = (id) =>
    userModel.findById(id);

const findByUsernameAndPassword = ({email, password}) =>
    userModel.findOne({email, password});

const findByUsername = ({email}) =>
    userModel.findOne({email});

const createUser = (user) =>
    userModel.create(user);


const updateUser = (id, user) =>
    userModel.updateOne({_id: id}, {
        $set: user
    });

const deleteUser = (userId) =>
    userModel.deleteOne({_id: userId});

module.exports = {
    findByUsername, findAllUsers, findUserById,
    findByUsernameAndPassword,
    createUser, updateUser, deleteUser
};
