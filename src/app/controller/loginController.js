const account = require('../models/Account')
const coffee = require('../models/Coffee')
const { multipleMongooseToObject } = require('../../util/mongoose')

class loginCotroller {
    index(req, res) {
        res.render('login')
    }

    login(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        //res.json(req.body)
        account.findOne({
            username: username,
            password: password
        })
            .then(data => {
                if (data) {
                    let coffeeQuery = coffee.find({});

                    if (req.query.hasOwnProperty('_sort')) {
                        coffeeQuery = coffeeQuery.sort({
                            [req.query.column]: req.query.type
                        })
                    }

                    Promise.all([coffeeQuery, coffee.countDocumentsDeleted()])
                        .then(([coffee, deletedCount]) =>
                            res.render('admin/home', {
                                showHeaderFooter: true,
                                deletedCount,
                                coffee: multipleMongooseToObject(coffee)
                            })
                        )
                }
                else {
                    res.json("sai tai khoan hoac mat khau")
                }
            })
            .then(data => {

            })
            .catch(err => {
                res.status(500).json('error')
            })
    }

    register(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        account.findOne({
            username: username
        })
            .then(data => {
                if (data) {
                    res.json("tai khoan nay da ton tai")
                }
                else {
                    return account.create({
                        username: username,
                        password: password
                    })
                }
            })
            .then(data => {
                res.json("success")
            })
            .catch(err => {
                res.status(500).json('error')
            })
    }
}

module.exports = new loginCotroller()

