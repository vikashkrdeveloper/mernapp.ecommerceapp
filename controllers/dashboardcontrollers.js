const dashboardcontrollers=async (req,res)=>{
   const data=await req.rootUser;
   res.send(data);
// res.send(req.rootUser)
}

module.exports=dashboardcontrollers;