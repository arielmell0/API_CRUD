const express = require('express')
const route = express.Router()

const HomeController = require('./src/Controller/HomeController')

route.get('/', HomeController.home)

module.exports = route