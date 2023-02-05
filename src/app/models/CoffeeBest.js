const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoffeeBest = new Schema({
    name: {type: String},
    description: {type: String},
    mass: {type: Number},
    price: {type: Number},
    imageId: {type: String}
},{
    timestamps: true
})

module.exports = mongoose.model('CoffeeBest', CoffeeBest)