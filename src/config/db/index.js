const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tubeocoffee:tubeocoffee@tbcoffee.iovvrey.mongodb.net/?retryWrites=true&w=majority')
        console.log('connect to database success !!!')
    }
    catch {
        console.log('connect to database failure !!!')
    }
}


module.exports = { connect }