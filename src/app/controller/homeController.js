const coffeeBest = require('../models/coffeeBest')
const { multipleMongooseToObject } = require('../../util/mongoose')

class homeController {
    index(req, res, next) {
        coffeeBest.find({})
            .then(coffee => {
                res.render('home', {
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }

    introduce(req, res, next) {
        res.render('introduce', { showHeaderFooter: true, })
    }

    detail(req, res, next) {
        coffeeBest.find({ _id: req.params.id })
            .then((coffee) => {
                res.render('detail', {
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }
}



module.exports = new homeController()

