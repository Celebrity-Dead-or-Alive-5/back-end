
exports.seed = function(knex) {

  let stat1 = new Boolean(true);
  let stat0 = new Boolean(false);
  // Deletes ALL existing entries
  return knex('celebs').del()
    .then(function () {
      // Inserts seed entries
      return knex('celebs').insert([
        {name: 'Harrison Ford', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/220px-Harrison_Ford_by_Gage_Skidmore_3.jpg', isDead: stat0.toString()},
        {name: 'Bruce Campbell', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bruce_Campbell_2014_Phoenix_Comicon_%28cropped%29.jpg/220px-Bruce_Campbell_2014_Phoenix_Comicon_%28cropped%29.jpg', isDead: stat0.toString()},
        {name: 'Desi Arnaz', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Desi_Arnaz_1950.JPG/220px-Desi_Arnaz_1950.JPG', isDead: stat1.toString()},
        {name: 'Merv Griffin', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Merv_Griffin.jpg/220px-Merv_Griffin.jpg', isDead: stat1.toString()},
        {name: 'Nichelle Nichols', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Nichelle_Nichols_by_Gage_Skidmore.jpg/220px-Nichelle_Nichols_by_Gage_Skidmore.jpg1', isDead: stat0.toString()}
      ]);
    });
};
