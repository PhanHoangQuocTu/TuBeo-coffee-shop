const homeRoute = require('./home')
const shopRoute = require('./shop')
const coffeeRoute = require('./coffee')
const adminRoute = require('./admin')
const loginRoute = require('./login')
function route(app){
    app.use('/admin', adminRoute)
    app.use('/login', loginRoute)
    app.use('/shop', shopRoute)
    app.use('/coffee', coffeeRoute)
    app.use('/', homeRoute)
}

module.exports = route