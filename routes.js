const express = require('express')
const routes = express.Router()
const controller = require('./controllers')

routes.get('/',controller.show)
routes.post('/',controller.add)
routes.delete('/:codigo',controller.remove)
routes.put('/:codigo',controller.update)

module.exports = routes