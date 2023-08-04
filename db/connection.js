const mongoose = require('mongoose');
const database = process.env.DATABASE;

mongoose.connect('mongodb://127.0.0.1:27017/ecommercewebapp')
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Database not connected', error);
    })


const schema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        trim: true

    },
    phone: {
        type: Number,
        trim: true

    },
    address: {
        type: String,
        trim: true,
        lowercase: true
    },
    professional: {
        type: String,
        trim: true,
        lowercase: true
    },
    tokens: [
        {
            token: {
                type: String,
            }
        }
    ]
});

 
const modules = mongoose.model('userdetails', schema);

module.exports = modules;