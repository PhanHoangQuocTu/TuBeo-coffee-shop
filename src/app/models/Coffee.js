const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coffee = new Schema({
    name: {type: String},
    description: {type: String},
    mass: {type: Number},
    price: {type: Number},
    country: {type: String},
    imageId: {type: String},
},{
    timestamps: true
})

module.exports = mongoose.model('Coffee', Coffee)