
exports.up = function(knex) {
      return knex.schema.createTable("celebs", tbl => {
        tbl.increments();
        tbl
          .text("name", 128)
          .notNullable()
          .unique();
        tbl.text("imageUrl", 128).notNullable();
        tbl.text("isDead", Boolean).notNullable()
        .defaultTo(0)
        .toString();
      });
    };
exports.down = function(knex) {
      return knex.schema.dropTableIfExists("celebs");
    };
