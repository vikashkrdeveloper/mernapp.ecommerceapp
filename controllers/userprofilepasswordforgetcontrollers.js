const database = require('../models/model');
const hashpasswordfun = require('../helpers/hash');
const userprofilepasswordforgetcontrollers = async (req, res) => {
    try {
        const email = req.params.email;
        const { password, conformpassword } = req.body;
        if (email && password && conformpassword) {
            const finddata = await database.findOne({ email });
            if (finddata) {
                if (password === conformpassword) {
                    const hashingpassword = await hashpasswordfun(password);
                    await database.updateOne({ email }, { password: hashingpassword })
                    res.status(200).send()

                }
                else {
                    res.status(400).send();
    
                }
            }
            else{
                res.status(406).send();

            }
        }
        else {
            res.status(500).send();
        }

    }
    catch (error) {
        console.log(error);

    }
}
module.exports = userprofilepasswordforgetcontrollers;