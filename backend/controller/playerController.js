const Knex = require('../knex/knex')
const bcrypt = require("bcrypt")
const {generateUserToken} = require("../lib")


async function register (req, res) {
    // implement some makeshift validator
    /*eslint no-throw-literal: "error"*/
    // const name = req.body.name ? req.body.name : '';
    const name = req.body.name
    const password = req.body.password


    let salt = 10
    const hash = await bcrypt.hash(password, salt)
    try{
        const response = await Knex('players').insert({name, hash})
        const id = response[0]
        const user = await Knex('players').select('identifier','name').where('identifier', id)
        res.json({
            token: generateUserToken(user[0]),
            success: true
        })
    }catch(e){
        res.status(500).json({message: 'An error occurred while inserting player', error: e.message, success: false})
    }
}


module.exports = {
    register
}
