
const {jwtSecret} = require('../config')
const {getUserById} = require('../users/users.controllers')
const jwtStrategy = require('passport-jwt').Strategy

const ExtractJwt = require('passport-jwt').ExtractJwt


module.exports = (passport) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new jwtStrategy(options, async(decoded, done) => {
            try {
                const response = await getUserById(decoded.id)
                if(!response){
                    return done(null, false)
                }
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
        })
    )
}