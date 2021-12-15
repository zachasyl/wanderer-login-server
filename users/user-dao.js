const userModel = require("./user-model");

const findAllUsers = () => userModel.find();

const findUserById = (id) => userModel.findById(id);

const findByUsernameAndPassword = ({ email, password }) =>
  userModel.findOne({ email, password });

const findByUsername = (email) => userModel.findOne({ email: email });

const createUser = (user) => userModel.create(user);

const updateUser = (id, user) =>
  userModel.updateOne(
    { _id: id },
    {
      $set: user,
    }
  );

const updateUserByEmail = (id, user) =>
  userModel.updateOne(
    { email: user.email },
    {
      $set: {
        firstName: user.firstName,
        lastName: user.lastName,
        description: user.description,
        dateOfBirth: user.dateOfBirth,
      },
    }
  );

const deleteUser = (userId) => userModel.deleteOne({ _id: userId });

module.exports = {
  findByUsername,
  findAllUsers,
  findUserById,
  findByUsernameAndPassword,
  createUser,
  updateUser,
  updateUserByEmail,
  deleteUser,
};
