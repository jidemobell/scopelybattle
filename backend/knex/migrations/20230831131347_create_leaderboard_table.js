/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('leaderboard', (table) => {
            table.increments('id').primary()
            table.integer('player').index().references('identifier').inTable('players').onDelete('SET NULL')
            table.integer('rank')
            table.integer('score')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('leaderboard')
};
