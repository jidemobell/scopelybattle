/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('players', (table) => {
            table.increments('identifier').primary()
            table.string('name', [20]).notNullable()
            table.string('hash')
            table.bigint('gold')
            table.integer('hit_points')
            table.integer('luck_value')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('players');
};
