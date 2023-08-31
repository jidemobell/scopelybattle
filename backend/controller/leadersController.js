const Knex = require('../knex/knex')
// const bcrypt = require("bcrypt")
// const {generateUserToken} = require("../lib")


async function getAlleaders (req, res) {
     try {
         const leadersFromBoard = await Knex('leaderboard').select('*').where('score', '>', 100)
         res.status(200).json({leadersFromBoard})
     }catch (e) {
         res.status(500).json({message: 'An error occurred while retrieving  leaders', error: e.message, success: false})
     }

}

module.exports = {
    getAlleaders,
}
