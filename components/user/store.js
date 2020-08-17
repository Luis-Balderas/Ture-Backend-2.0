const UserModel = require('./model');

function addUser(user) {
  const myUser = new UserModel(user);
  return myUser.save();
}

function listUsers() {
  return UserModel.find();
}

function getUserById(DNI) {
  return UserModel.findOne({ DNI });
}
module.exports = {
  add: addUser,
  list: listUsers,
  getOne: getUserById,
};
