const db = require('../data/dbConfig.js');

module.exports = {
    
    find,
    findById,
    findBy,
    add,
    update,
    remove,
    nuke
};

function find() {
    return db('celebs')
      .select('id', 'name', 'imageurl', 'info', 'dead');
};

function findById(id) {
    return db('celebs')
      .where({id})
      .first();
}

function findBy(filter) {
    return db('celebs')
      .where(filter);
};

async function add(celeb) {
    const [id] = await db('celebs').insert(celeb, 'id');
    return db('celebs').where({id}).first();
};

function update(changes, id) {
    return db('celebs')
      .where({ id })
      .update(changes);
};

function remove(id) {
    return db('celebs')
      .where('id', Number(id))
      .del();
}

async function nuke() {
  await db('celebs')
    .del();
}