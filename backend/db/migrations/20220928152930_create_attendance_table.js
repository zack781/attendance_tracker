exports.up = function(knex) {
    return knex.schema
      .createTable('attendance_table', function (table) {
        table.increments('id');
        table.string('date');
        table.string('first');
        table.string('middle');
        table.string('last');
        table.boolean('showed_up');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('attendance_table');
  };