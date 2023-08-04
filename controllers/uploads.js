const multer = require('multer');
const path = require('path');
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
          const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
          cb(null, fileName);
        }
      });
      
      const upload = multer({ storage });
 
module.exports=upload ;