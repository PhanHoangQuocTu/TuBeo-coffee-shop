const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: './src/public/img/coffee/' })
const coffeeController = require('../app/controller/coffeeController')

router.get('/detail/:id', coffeeController.detail);

module.exports = router