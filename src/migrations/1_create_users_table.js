/**
 * Create 'users' table.
 *
 * @param  knex
 */
export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('first_name', 30).notNull();
    table.string('last_name', 30).notNull();
    table.string('email', 100).notNull().unique();
    table.string('password', 200).notNull();
    table.boolean('is_active').notNull().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop 'users' table.
 *
 * @param  knex
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
