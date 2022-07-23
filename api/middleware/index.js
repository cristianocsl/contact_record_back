const multer = require('multer');
const path = require('path');

const pathToUpload = path.resolve(__dirname, '../../uploads/');

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, pathToUpload);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
  fileFilter: (req, file, callback) => {
    const fileRegex = ['pdf', 'doc', 'docx', 'odt', 'txt'].find((validFormat) => validFormat === file.originalname.split('.').pop());
    
    if (fileRegex) {
      callback(null, true);
    }
    callback(null, false);
  },

}));
