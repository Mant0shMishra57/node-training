const express = require('express')
const routes = express.Router();
const controller = require('./controller');


routes.post('/login',controller.login)

routes.post('/registration',controller.register)


module.exports = routes