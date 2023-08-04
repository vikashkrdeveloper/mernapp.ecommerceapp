const bcrypt =require('bcrypt');
const hashing = async (password)=>{
    const bcryptsalt=10;
    const  passwordhash=await bcrypt.hash(password,bcryptsalt);
     return passwordhash;
}
module.exports=hashing;