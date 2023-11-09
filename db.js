const {Pool} = require('pg')

pool = new Pool(
{
    user : 'postgres',
    database : 'vendas',
    host : 'localhost',
    port : '5432',
    password:'root'
})

module.exports = pool