const productmodule=require('../models/productadd');

const showproductcontrollers= async(req,res)=>{
try{
 
const read= await  productmodule.find();
res.send(read);


}
catch(error){
res.status(404).send('This time sum technical issues');
}
}

module.exports=showproductcontrollers;