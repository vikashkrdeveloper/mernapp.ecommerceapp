const database = require('../models/model');
const compare = require('../helpers/compare');
const logincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finddata = await database.findOne({ email });
        if (email && password) {
            if (finddata) {
                const passwordcompare = await compare(password, finddata.password);

                if (!passwordcompare) {
                    res.status(404).send('Invalid login details');

                }
                else {
                    const tokensave = await finddata.genratetoken();
                    res.cookie('jwttokens',tokensave,{ httpOnly: true })
                    res.status(200).send('Login sucessfilly');
                }
            }
            else {
                res.status(404).send('Invalid login details');
            }
        }
        else {
            res.status(500).send('All field require');
        }
    }
    catch (error) {
        res.status(400).send({ message: 'Sum technical issues', error })
    }
}
module.exports = logincontrollers;