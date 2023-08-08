const coffee = require('../models/Coffee')

const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class adminController {
    index(req, res, next) {
        coffee.find({})
            .then(coffee => {
                res.render('admin/home', {
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
            .catch(next)
    }
    createForm(req, res, next) {
        res.render('admin/create', {showHeaderFooter: true,})
    }

    detail(req, res, next) {
        coffee.find({ _id: req.params.id })
            .then(coffee => {
                res.render('admin/detail', {
                    showHeaderFooter: true,
                    coffee: multipleMongooseToObject(coffee)
                })
            })
    }

    create(req, res, next) {
        const formData = req.body;
        var imagePath = req.file.path.split('\\').slice(2).join('/')
        formData.imageId = imagePath;
        const newCoffee = new coffee(formData);
        newCoffee.save()
            .then(() => res.redirect('/admin'))
            .catch(next)
    }

    updateForm(req, res, next) {
        coffee.findById(req.params.id)
            .then(coffee => res.render('admin/update', {
                showHeaderFooter: true,
                coffee: mongooseToObject(coffee)
            }))
            .catch(next)
    }

    update(req, res, next) {
        const formData = req.body;
        var imagePath = req.file.path.split('\\').slice(2).join('/')
        formData.imageId = imagePath;
        coffee.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/admin'))
            .catch(next)
    }

    delete(req, res, next) {
        coffee.delete({ _id: req.params.id })
            .then(() => res.redirect('/admin'))
            .catch(next)
    }

    forceDelete(req, res, next) {
        coffee.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/admin'))
            .catch(next)
    }

    actionsForm(req, res, next) {
        switch (req.body.action) {
            case 'delete': {
                coffee.delete({ _id: { $in: req.body.coffeeIds } })
                    .then(() => res.redirect('/admin'))
                    .catch(next)
                break;
            }
            case 'restore': {
                coffee.restore({ _id: { $in: req.body.coffeeIds } })
                    .then(() => res.redirect('/admin'))
                    .catch(next)
                break;
            }
            default:
                res.json({ message: "Action is invalid" })
        }
    }

    trash(req, res, next) {
        coffee.findDeleted({})
            .then(coffee => res.render('admin/trash', {
                showHeaderFooter: true,
                coffee: multipleMongooseToObject(coffee)
            }))
            .catch(next)
    }

    restore(req, res, next) {
        coffee.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    show(req, res, next) {
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
}

module.exports = new adminController()

