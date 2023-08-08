const coffee = require('../models/Coffee')
const { multipleMongooseToObject } = require('../../util/mongoose')

class coffeeController {
    detail(req, res) {
        coffee.find({_id: req.params.id})
            .then(coffee => {
                res.render('coffee/detail',{
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
     }
}

module.exports = new coffeeController()

