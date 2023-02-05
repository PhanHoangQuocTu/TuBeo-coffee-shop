const express = require('express')
const router = express.Router()
const shopController = require('../app/controller/shopController')

router.get('/', shopController.index)

module.exports = router