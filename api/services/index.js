const { format } = require('date-fns');
const { recordContactModel, getContactsModel } = require('../models/contact');
const { validateFields } = require('../validate');

module.exports.recordContactService = async (contactInformations) => {
  validateFields(contactInformations);
  const payload = {
    ...contactInformations,
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  };
  const { _id } = await recordContactModel(payload);
  return { ...payload, _id };
};

module.exports.getContactsService = async () => getContactsModel();
