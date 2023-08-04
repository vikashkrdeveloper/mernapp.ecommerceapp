const hashpasswordfun = require('../helpers/hash');
const database = require('../models/model');
const userprofilepasswordcontrollers = async (req, res) => {
    try {
        const {email} = req.params;
        const {password, conformpassword }=req.body
        if (password && conformpassword) {
            if (password === conformpassword) {
                const hasingpassword = await hashpasswordfun(password);
                await database.updateOne({email}, { password: hasingpassword });
                res.status(200).send();
            }
            else {
                res.status(400).send();

            }

        }
        else {
            res.status(500).send()
        }



    }
    catch (error) {
        console.log(error);
    }

}
module.exports = userprofilepasswordcontrollers;