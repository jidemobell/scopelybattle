require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
// || 'development'
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);
