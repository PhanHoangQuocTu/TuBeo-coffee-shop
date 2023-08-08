const coffee = require('../models/Coffee')
const { multipleMongooseToObject } = require('../../util/mongoose')

class shopController {
    index(req, res, next) {
        coffee.find({})
            .then(coffee => {
                res.render('shop',{
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }
}

module.exports = new shopController()

