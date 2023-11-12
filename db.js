const {Pool} = require('pg')
require('dotenv').config()

pool = new Pool(
{
    user : process.env.DB_USER,
    database : process.env.DB_DATABASE,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    password: process.env.DB_PASS
})

module.exports = pool