const { EMPTY_FIELD, INVALID_EMAIL, INVALID_PHONE_NUMBER,
  INVALID_FILE_TYPE, INVALID_SIZE_FILE } = require('../throwExpections');

module.exports.validateFileExtension = (reqFile) => {
  if (!reqFile) {
    throw INVALID_FILE_TYPE;
  }
};

const validateFileSize = (fileSize) => {
  if (fileSize > 512000) {
    throw INVALID_SIZE_FILE;
  }
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^[1-9]{2} [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    throw INVALID_PHONE_NUMBER;
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    throw INVALID_EMAIL;
  }
};

module.exports.validateFields = (contactInformation) => {
  const { name, email, phoneNumber, message, attachedFile, size } = contactInformation;
    if (!name || !email || !phoneNumber || !message || !attachedFile) {
    throw EMPTY_FIELD;
  }
  validateEmail(email);
  validatePhoneNumber(phoneNumber);
  validateFileSize(size);
};