const mongoose = require('../config/db');
const product = new mongoose.Schema({

    producttitle: {
        type: String,
        trim: true,
        lowercase: true
    },
    discription: {
        type: String,
        trim: true,
        lowercase: true
    },
    productimage: {
        
            type: Buffer,
            contentType: String,
        
    },
    category: {
        type: String,
        trim: true,
        lowercase: true
    },
    subcategory: {
        type: String,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
        lowercase: true
    },
    index: {
        type: Number,
        trim: true

    }

}, { timestamps: true })

const products = mongoose.model('products', product);

module.exports = products;