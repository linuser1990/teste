const express = require('express')
const routes = express.Router()
const controller = require('./controllers')

routes.get('/',controller.exibir)

module.exports = routes