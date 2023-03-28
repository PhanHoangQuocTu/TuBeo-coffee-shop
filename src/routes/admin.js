const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: './src/public/img/coffee/' })
const adminController = require('../app/controller/adminController')


router.get('/', adminController.show);
router.get('/trash', adminController.trash);
router.post('/actions-form', adminController.actionsForm);
router.get('/createForm', adminController.createForm);
router.get('/detail/:id', adminController.detail);
router.post('/create', upload.single('imageId'), adminController.create);
router.get('/:id/updateForm', adminController.updateForm);
router.put('/:id', upload.single('imageId'), adminController.update);
router.patch('/:id/restore', adminController.restore);
router.delete('/:id', adminController.delete);
router.delete('/:id/force', adminController.forceDelete);



module.exports = router