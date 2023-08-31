const passport = require('../lib/passport')

// expand middlewares as needed
module.exports = {
    protectRoute : passport.authenticate('jwt', {session: false}),
    loginToRoute :  passport.authenticate('local_strategy', {session: false})
}
