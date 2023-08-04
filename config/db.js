const mongoose=require('mongoose');
const databaseaddress=process.env.DATABASE_ADDRESS;
mongoose.connect(databaseaddress)
 .then(()=>{
    console.log('connected')
 })  
 .catch((error)=>{
 console.log('not connected');
 })
module.exports=mongoose;
