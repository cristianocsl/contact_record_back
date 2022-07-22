const { format } = require('date-fns');
const { recordContactModel } = require('../models/contact');

const { EMPTY_FIELD, INVALID_EMAIL, INVALID_PHONE_NUMBER, INVALID_FILE_TYPE, INVALID_SIZE_FILE } = require('../throwExpections');

const validateFile = (attachedFile) => {
  const fileRegex = /^.*\.(pdf|doc|docx|odt|txt)$/;
  if (!fileRegex.test(attachedFile.name)) {
    throw INVALID_FILE_TYPE;
  }
  if (attachedFile.size > 5242880) {
    throw INVALID_SIZE_FILE;
  }
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/;
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

const validateFields = (contactInformation) => {
  const { name, email, phoneNumber, message, attachedFile } = contactInformation;
    if (!name || !email || !phoneNumber || !message || !attachedFile) {
    throw EMPTY_FIELD;
  }
  validateEmail(email);
  validatePhoneNumber(phoneNumber);
  validateFile(attachedFile);
};

module.exports.recordService = async (contactInformations) => {
  validateFields(contactInformations);
  const payload = {
    ...contactInformations,
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    senderIp: '',
  };
  const { _id } = await recordContactModel(payload);
  return { ...payload, _id };
};
