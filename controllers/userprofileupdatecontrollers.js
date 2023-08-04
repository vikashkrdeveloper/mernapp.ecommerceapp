const database = require('../models/model');
const userprofileupdatecontrollers = async (req, res) => {
    try {
        const { name, phone, address, username, newemail,district } = req.body;
        if (name && phone && address && username&&newemail&&district) {
            const id = req.params.id;
            const update = await database.updateOne({_id:id},{name, phone, address, addressdistrict:district, username,newemail});
            res.status(200).send()
        }
        else {
            res.status(500).send();
        }



    }
    catch (error) {
        console.log(error)
    }

}
module.exports = userprofileupdatecontrollers;