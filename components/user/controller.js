const store = require('./store');

function addUser(user) {
  if (!user) {
    return Promise.reject('Invalid name');
  }
  const newUser = {
    ...user,
    birth: new Date(user.birth),
  };
  return store.add(newUser);
}

function listUsers() {
  return store.list();
}

function getUserById(DNI) {
  return store.getOne(DNI);
}

module.exports = {
  addUser,
  listUsers,
  getUserById,
};
