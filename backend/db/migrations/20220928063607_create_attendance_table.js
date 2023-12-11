exports.up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id');
        table.string('date');
        table.string('first');
        table.string('middle');
        table.string('last');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('users');
  };