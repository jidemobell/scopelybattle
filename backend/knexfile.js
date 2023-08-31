// Update with your config settings.
require("dotenv").config()
console.log("the environ", process.env.NODE_ENV )

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './App.sqlite'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: ":memory:",
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    },
    useNullAsDefault: true,
  }
};
