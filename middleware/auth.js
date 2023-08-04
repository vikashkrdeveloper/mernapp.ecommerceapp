const jwt = require('jsonwebtoken');
const database = require('../models/model');
const authentication = async (req, res, next) => {

    try {
        const token = req.cookies.jwttokens;
        const verfiytoken = jwt.verify(token, process.env.SECURTY_KEY);
        const rootUser = await database.findOne({ _id: verfiytoken._id, "tokens.token": token })
        if (!rootUser) {
            throw new Error('User not found');

        }
        req.token = token;
        req.rootUser = rootUser;
        req.Userid = rootUser._id;
        next();
    }
    catch (error) {
        res.status(400).send('user not login ');
    }


}
module.exports = authentication;