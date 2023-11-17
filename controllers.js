const pool = require('./db')

const show = async (req, res) => 
{
    const {rows} = await pool.query('SELECT * FROM cliente ORDER BY nome')
    req.session.users = rows
    res.render('index',{resultado : req.session.users })
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
    const {rows} = await pool.query('UPDATE cliente SET nome = $1 WHERE codigo = $2 RETURNING nome',[nome,codigo])
    res.status(200).json({mensagem: 'atualizado o novo nome: ', row : rows[0]})
}

const verificaLogin = async (req, res) => 
{
    const senha = req.body.senha
   if(senha == '123')
   {
        req.session.isAuthenticated = true
        console.log('entrou senha : '+senha)
        //POSSO USAR ISSO TAMBEM
        //res.render('dashboard')
        res.redirect('/api/dashboard')

   }else
   {
       console.log('errado')
       res.status(200)
   }
  res.status(200)
}

const logout = async (req, res) =>
{
    res.redirect('/api/')
    req.session.destroy()
    
}

const dashboard = async (req, res) =>
{
    res.render('dashboard')
}

module.exports = {show,add,remove,update,verificaLogin,logout,dashboard}