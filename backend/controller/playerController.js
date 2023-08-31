const Knex = require('../knex/knex')
const bcrypt = require("bcrypt")
const {generateUserToken} = require("../lib")


async function register (req, res) {
    const username = req.body.username ? req.body.username :
        res.status(500).json({ error: "confirm that you entered a username/or password", success: false})

    const password = req.body.password ? req.body.password :
        res.status(500).json({ error: "confirm that you entered a username/or password", success: false})


    let salt = 10
    const hash = await bcrypt.hash(password, salt)
    try{
        const response = await Knex('players').insert({username, hash})
        const id = response[0]
        const user = await Knex('players').select('id','username').where('id', id)
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
