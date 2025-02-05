exports.up = function(knex) {
  return knex.schema.createTale('users', function(table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('password_hash');
    table.timestamp('created_at').defaultTo(knex.fn.now());;
    table.timestamp('updated_at').defaultTo(knex.fn.now());;
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
