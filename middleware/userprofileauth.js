const jwt = require('jsonwebtoken');
const database = require('../models/model');
const userprofileauth = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const tokenverify = jwt.verify(token, process.env.SECURTY_KEY);
        const rootUser = await database.findOne({ _id: tokenverify._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found');
        }
        if (rootUser.roll !==0) {
            throw new Error('User not found');

        }
        else {
        req.token = token;
        req.rootUser = rootUser;
        req.Userid = rootUser._id
        next();
        }

    }
    catch (error) {
        res.status(404).send('User not login')
    }

}

module.exports = userprofileauth