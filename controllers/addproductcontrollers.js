const productmodule=require('../models/productadd');
const addproductcontrollers = async (req, res) => {
    try {
        const { producttitle, discription, productimage, category, subcategory, price, country } = req.body;
        if (producttitle && discription && productimage && category && subcategory && price && country) {
           
            const insertdata=new productmodule({producttitle, discription, productimage, category, subcategory, price, country });
            await insertdata.save();
             res.status(200).send('Sucess fully');
 

        }
        else {
            res.status(500).send('');
        }
    }
    catch (error) {
        res.status(404).send('Sum technical issues');
    }

}
module.exports = addproductcontrollers;