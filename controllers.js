const pool = require('./db')

const exibir = async (req, res) => 
{
    console.log('exibir')
    const {rows} = await pool.query('SELECT * FROM cliente')
    res.render('index',{resultado : rows })
}

module.exports = {exibir}