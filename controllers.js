const pool = require('./db')

const show = async (req, res) => 
{
    console.log('exibir')
    const {rows} = await pool.query('SELECT * FROM cliente')
    res.render('index',{resultado : rows })
}

const add = async (req, res) => 
{
    const {nome} = req.body
    try
    {
        const {rows} = await pool.query('INSERT INTO cliente (nome) values ($1)',[nome])
    }catch(error)
    {
        console.log(error)
    }
   
}

const remove = async(req, res) =>
{
    const {codigo} = req.params
    const {rows} = await pool.query('DELETE FROM cliente WHERE codigo = $1 RETURNING * ',[codigo])
    res.status(200).json({resultado : 'foi',dados : rows[0]})
}

const update = async (req, res) =>
{
    const {codigo} = req.params
    const {nome} = req.body
    const {rows} = await pool.query('UPDATE cliente SET nome = $1 WHERE codigo = $2',[nome,codigo])
}

module.exports = {show,add,remove,update}