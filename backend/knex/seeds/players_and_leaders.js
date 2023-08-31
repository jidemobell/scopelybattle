/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()
  await knex('leaderboard').insert([
    {id: 1, player: '2', rank: '1' , score: '10000'},
  ]);
};
