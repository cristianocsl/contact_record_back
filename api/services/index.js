const { format } = require('date-fns');
const { recordContactModel } = require('../models/contact');
const { validateFields } = require('../validate');

module.exports.recordContactService = async (contactInformations) => {
  validateFields(contactInformations);
  const payload = {
    ...contactInformations,
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    senderIp: '',
  };
  const { _id } = await recordContactModel(payload);
  return { ...payload, _id };
};
