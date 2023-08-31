const Knex = require('../knex/knex')
const {compare, compareSync} = require("bcrypt");
const passport = require("passport")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')


// logic copied https://www.passportjs.org/
const local = new LocalStrategy(async function verify(name, password, done) {
    try {
        let user = await Knex('players').select('*').where('name', name)
        user = user[0]
        let bool = await compareSync(password, user.hash);
        if(bool) return done(null, user)
        else  done(null, false);
    }catch (e) {
        done(null, false, { message: "Incorrect username or password."})
    }
})


const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = 'secret'


const jwtLocal = new JwtStrategy(options, async (payload, done) =>{
    try {
        let user = await Knex('players').select('*').where('identifier', payload.sub)
        return done(null, user);
    } catch (err) {
        return done(null, false);
    }
})

passport.use('local_strategy', local)
passport.use( 'jwt', jwtLocal)
module.exports = passport
