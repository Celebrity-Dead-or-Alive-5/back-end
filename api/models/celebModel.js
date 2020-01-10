const db = require('../../data/dbConfig.js');

module.exports = {
    
    find,
    findById,
    findBy,
    add,
    update,
    remove
};

function find() {
    return db('celebs')
      .select('id', 'name', 'imageUrl', 'isDead')
      .returning('*');
};

function findById(id) {
    return db('celebs')
      .where({id})
      .first()
      .returning('*');

}

function findBy(filter) {
    return db('celebs')
      .where(filter)
      .returning('*');

};

async function add(celeb) {
    const [id] = await db('celebs').insert(celeb, 'id');
    return db('celebs').where({id}).first()
    .returning('*');

};

function update(changes, id) {
    return db('celebs')
      .where({ id })
      .update(changes)
      .returning('*');

};

function remove(id) {
    return db('celebs')
      .where('id', Number(id))
      .del();
}
