const express = require('express')
const router = express.Router()
const homeController = require('../app/controller/homeController')

router.get('/introduce', homeController.introduce)
router.get('/:id', homeController.detail)
router.get('/', homeController.index)

module.exports = router