const mongoose = require('mongoose')
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema

const Coffee = new Schema({
    name: { type: String },
    description: { type: String },
    mass: { type: Number },
    price: { type: Number },
    country: { type: String },
    imageId: { type: String },
    deletedAt: { type: Date }
}, {
    timestamps: true
})

Coffee.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Coffee', Coffee)