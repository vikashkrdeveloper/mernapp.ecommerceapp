const bcrypt =require('bcrypt');
const compare=async (password,hasingpassword)=>{
      const comparepassword =await bcrypt.compare(password,hasingpassword);
      return comparepassword;
}

module.exports=compare;