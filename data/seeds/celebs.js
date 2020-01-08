
exports.seed = function(knex) {

  let stat1 = new Boolean(true);
  let stat0 = new Boolean(false);
  // Deletes ALL existing entries
  return knex('celebs').del()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        {name: 'Harrison Ford', imageUrl: 'rowValue1', isDead: stat0.toString()},
        {name: 'Bruce Campbell', imageUrl: 'rowValue1', isDead: stat0.toString()},
        {name: 'Desi Arnaz', imageUrl: 'rowValue1', isDead: stat1.toString()},
        {name: 'Merv Griffin', imageUrl: 'rowValue1', isDead: stat1.toString()},
        {name: 'Nichelle Nichols', imageUrl: 'rowValue1', isDead: stat0.toString()}
      ]);
    });
};
