const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: './src/public/img/coffee/' })
const adminController = require('../app/controller/adminController')


router.get('/', adminController.index);
router.get('/createForm', adminController.createForm);
router.get('/detail/:id', adminController.detail);
router.post('/create', upload.single('imageId'), adminController.create);
router.get('/:id/updateForm', adminController.updateForm);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);

module.exports = router