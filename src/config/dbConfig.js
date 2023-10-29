require('dotenv').config();

let envvar = process.env;

module.exports = {
    mysql: {
        prod: {
            host: envvar.DB_HOST,
            user: envvar.DB_USERNAME,
            password: envvar.DB_PASSWORD,
            database:  envvar.DB_DBNAME
        }
    }
}