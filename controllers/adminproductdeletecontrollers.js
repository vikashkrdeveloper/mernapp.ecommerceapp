const database=require('../models/productadd');
const adminproductdeletecontrollers = async (req, res) => {
    try {
        const id=req.params.id;
        await database.deleteOne({_id:id});
        res.status(200).send();

    }
    catch (error) {
        res.status(404).send(error);
    }

}
module.exports = adminproductdeletecontrollers;