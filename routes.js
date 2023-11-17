const express = require('express')
const routes = express.Router()
const controller = require('./controllers')
const isAuthenticated = require('./authMiddleware')

routes.get('/',controller.show)
routes.get('/logout',controller.logout)
routes.get('/dashboard',isAuthenticated,controller.dashboard)
routes.post('/verificaLogin',controller.verificaLogin)
routes.post('/',controller.add)
routes.delete('/:codigo',controller.remove)
routes.put('/:codigo',controller.update)



module.exports = routes