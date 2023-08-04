const database = require('../config/db');
const jwt = require('jsonwebtoken');
const schema = new database.Schema({
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
    username: {
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
        trim: true,

    },
    roll: {
        type: Number,
        default: 0
    },
    address:{
        type: String,
        lowercase: true,
        trim: true
    },
    addressdistrict:{
        type: String,
        lowercase: true,
        trim: true
    },
    newemail:{
        type: String,
        lowercase: true,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String,
                trim: true,

            }

        }
    ]

},
    { timestamps: true })

schema.methods.genratetoken = async function () {

    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECURTY_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
}

const modules = database.model('logindetails', schema);
module.exports = modules, schema;