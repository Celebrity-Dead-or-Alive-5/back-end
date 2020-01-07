  
const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findBy,
    addPoints,
    remove
};

function find() {
    return db('users')
      .select('id', 'username', 'password', 'score');
};

function findById(id) {
    return db('users')
      .where({id})
      .first();
};

function findBy(filter) {
    return db('users')
      .where(filter);
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return db('users').where({id}).first();
};

function addPoints(changes, id) {
    return db('users')
      .where({ id })
      .update(changes);
};

function remove(id) {
    return db('users')
      .where({id})
      .del();

}