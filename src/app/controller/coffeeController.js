const coffee = require('../models/Coffee')
const coffeeBest = require('../models/coffeeBest')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class coffeeController {
    detail(req, res, next) {
        coffee.find({_id: req.params.id})
            .then(coffee => {
                res.render('coffee/detail',{
                    coffee: multipleMongooseToObject(coffee)
                })
            })
     }
}

module.exports = new coffeeController()

