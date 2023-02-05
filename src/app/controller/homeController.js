const coffee = require('../models/Coffee')
const coffeeBest = require('../models/coffeeBest')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class homeController {
    
    index(req, res, next) {
        coffeeBest.find({})
            .then(coffee => {
                res.render('home', {
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }

    introduce(req, res, next) {
        res.render('introduce')
    }

    detail(req, res, next) {
        coffeeBest.find({ _id: req.params.id })
            .then((coffee) => {
                res.render('detail', { coffee: multipleMongooseToObject(coffee) })
            })
            .catch(next)
    }

    login(req, res, next) {
        var tk = req.body.account
        var pass = req.body.password
        var obj = {}
        accounts.find({ account: tk })
            .then(account => {
                obj = account;
                console.log(typeof account.account)
                console.log(typeof tk)
                console.log(account.account === tk)
                if (account.account === tk) {
                    res.redirect('home')
                }
                else {

                }
            })
    }
}



module.exports = new homeController()

