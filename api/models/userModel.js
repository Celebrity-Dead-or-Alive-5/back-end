  
const db = require('../../data/dbConfig');

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
      .select('id', 'username', 'password', 'score')
      .returning('*');

};

function findById(id) {
    return db('users')
      .where({id})
      .first()
      .returning('*');

};

function findBy(filter) {
    return db('users')
      .where(filter)
      .returning('*');

};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return db('users').where({id}).first()
    .returning('*');

};

function addPoints(changes, id) {
    return db('users')
      .where({ id })
      .update(changes)
      .returning('*');

};

function remove(id) {
    return db('users')
      .where({id})
      .del();

}