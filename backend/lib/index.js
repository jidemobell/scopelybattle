const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
const token = process.env.TOKEN_KEY || 'secret'

module.exports = {
    generateUserToken (user) {
        return jwt.sign(user, token, {
            expiresIn: '7d'
        })}
}
