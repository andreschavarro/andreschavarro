const mongoose = require('mongoose')

//definit el esquema de la coleccion product con sis respectivos campos  (key, value)
const productSchema = new mongoose.Schema({
    prodid: String,
    prodaname: String,
    prodPrice: Number,
    propdStock: Number,
    created: {
        type: Data,
        default: Date.now
    }
})


module.exports = mongoose.module('product', productSchema)
