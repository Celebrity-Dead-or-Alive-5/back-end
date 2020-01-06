const db = require("../../data/dbConfig");

function addUser(user) {
  return db("users")
    .returning(["id", "username", "name"])
    .insert(user);
}

function findBy(key) {
  return db("users")
    .where(key)
    .first();
}

module.exports = {
  addUser,
  findBy
};