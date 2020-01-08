const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Brian', password: bcrypt.hashSync('oxford', 14)},
        {username: 'Dom', password: bcrypt.hashSync('knox', 14)},
        {username: 'Lee', password: bcrypt.hashSync('omen', 14)},
        {username: 'Anthony', password: bcrypt.hashSync('nonic', 14)}
      ]);
    });
};
