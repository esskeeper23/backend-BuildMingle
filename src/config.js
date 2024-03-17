//? Dependencies
require('dotenv').config()

const config = {

    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jweSecret: process.env.JWE_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_User || 'postgres',
        password: process.env.DB_Pass || 'root',
        dbName: process.env.DB_NAME
    }

}


module.exports = config