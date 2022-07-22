const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

class Error {
  constructor(obj) {
    const { code, message } = obj;

    this.code = code;
    this.message = message;
  }
}

module.exports = Error;

module.exports.EMPTY_FIELD = new Error({
  code: UNPROCESSABLE_ENTITY,
  message: 'Todos os campos são obrigatórios!',
});

module.exports.INVALID_EMAIL = new Error({
  code: UNPROCESSABLE_ENTITY,
  message: 'Invalid email format!',
});

module.exports.INVALID_PHONE_NUMBER = new Error({
  code: UNPROCESSABLE_ENTITY,
  message: 'Invalid phone number format!',
});

module.exports.INVALID_SIZE_FILE = new Error({
  code: UNPROCESSABLE_ENTITY,
  message: 'Maximum file size allowed is 510 KB!',
});

module.exports.INVALID_FILE_TYPE = new Error({
  code: UNPROCESSABLE_ENTITY,
  message: 'Only files with format are pdf, doc, docx, odt or txt!',
});
