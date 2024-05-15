const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 

module.exports = router
//this file is a router, it triggers a method from the controller file when the user requests a specfic endpint of '/'.