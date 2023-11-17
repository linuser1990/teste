const isAuthenticated = async (req,res,next) =>
{
    if(req.session.isAuthenticated)
        return next()
    else
        console.log('nao logado')
}

module.exports = isAuthenticated;
