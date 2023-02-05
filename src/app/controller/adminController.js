const coffee = require('../models/Coffee')
const coffeeBest = require('../models/coffeeBest')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class adminController {
    index(req, res, next){
        coffee.find({})
            .then(coffee => {
                res.render('admin/home',{
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }
    createForm(req, res, next) {        
       res.render('admin/create')
    }

    detail(req, res, next) {
        coffee.find({_id: req.params.id})
            .then(coffee => {
                res.render('admin/detail',{
                    coffee: multipleMongooseToObject(coffee)
                })
            })
    }

    create(req, res, next) {
        const formData = req.body;
        var imagePath = req.file.path.split('\\').slice(2).join('/')
        formData.imageId = imagePath;
        const per = new coffee(formData);
        per.save()
            .then(() => res.redirect('/shop'))
            .catch(next)
    }

    updateForm(req, res, next) {
        res.render('shop');
    }
    update(req, res, next) {
        res.render('shop');
    }
    delete(req, res, next) {
        res.render('shop');
    }
}

module.exports = new adminController()

