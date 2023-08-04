const express =require('express');
const route=express.Router();
const database = require('../models/model');
const homeroute =require('../controllers/homeroute');
const registercontrollers=require('../controllers/registercontrollers');
const logincontrollers=require('../controllers/logincontrollers');
const authentication=require('../middleware/auth');
const cartcontrollers=require('../controllers/cartcontrollers');
const getdatacontrollers=require('../controllers/getdatacontrollers');
const logoutcontrollers=require('../controllers/logoutcontrollers');
const dashboardcontrollers=require('../controllers/dashboardcontrollers');
const authenticationdashboard=require('../middleware/authenticationdashboard');
const addproductcontrollers=require('../controllers/addproductcontrollers');
const showproductcontrollers=require('../controllers/showproductcontrollers');
const userprofilecontrollers=require('../controllers/userprofilecontrollers');
const userprofileauth=require('../middleware/userprofileauth');
const userprofiledeletecontrollers=require('../controllers/userprofiledeletecontrollers');
const userprofileupdatecontrollers=require('../controllers/userprofileupdatecontrollers');
const userprofilepasswordcontrollers=require('../controllers/userprofilepasswordcontrollers');
const userprofilepasswordforgetcontrollers=require('../controllers/userprofilepasswordforgetcontrollers');
const adminproductdeletecontrollers=require('../controllers/adminproductdeletecontrollers');
const uploads=require('../controllers/uploads')
route.get('/',homeroute);
route.post('/register',registercontrollers)
route.post('/login',logincontrollers);
route.get('/cart',authentication,cartcontrollers)
route.get('/getdata',authentication,getdatacontrollers)
route.get('/logout',authentication,logoutcontrollers)
route.get('/dashboard',authenticationdashboard,dashboardcontrollers)
route.post('/dashboard/addproduct',addproductcontrollers);
route.get('/dashboard/all/products/show',showproductcontrollers);
route.delete('/user/profile/delete/:id',userprofiledeletecontrollers);
route.delete('/admin/product/delete/:id',adminproductdeletecontrollers);
route.put('/user/profile/update/:id',userprofileupdatecontrollers);
route.put('/user/profile/password/change/:email',userprofilepasswordcontrollers);
route.put('/user/profile/password/forget/:email',userprofilepasswordforgetcontrollers);
route.get('/user/profile',userprofileauth,userprofilecontrollers);
route.post('/upload', uploads.array('images'), (req, res) => {
    const fileNames = req.files.map(file => file.filename);
    res.json({ success: true, files: fileNames });
  });
  
module.exports=route;