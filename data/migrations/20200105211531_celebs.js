
exports.up = function(knex) {
      return knex.schema.createTable("celebs", tbl => {
        tbl.increments();
        tbl
          .text("name", 128)
          .notNullable()
          .unique();
        tbl.text("photo", 128).notNullable();
        tbl.text("isDead", Boolean).notNullable();
      });
    };
exports.down = function(knex) {
      return knex.schema.dropTableIfExists("celebs");
    };
