const db = require("../../data/dbConfig");

function addCeleb(celeb) {
  return db("celebs")
    .returning(["id", "name", "photo", "isDead"])
    .insert(celeb);
}

function findBy(key) {
  return db("celebs")
    .where(key)
    .first();
}

module.exports = {
  addCeleb,
  findBy
};