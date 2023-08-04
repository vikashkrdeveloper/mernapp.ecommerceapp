const database = require('../models/model');
const userprofiledeletecontrollers = async (req, res) => {
    try {

        const deletequery = await database.deleteOne({ _id: req.params.id })
        res.status(200).send();

    }
    catch (error) {
        res.status(404).send('Some technical isses');
    }

}
module.exports = userprofiledeletecontrollers
