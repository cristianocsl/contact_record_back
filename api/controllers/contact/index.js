const { CREATED } = require('http-status-codes').StatusCodes;
const ip = require('ip');
const { recordContactService, getContactsService } = require('../../services');
const { validateFileExtension } = require('../../validate');
const nodeMailer = require('../../nodeMailer');

module.exports.recordContactController = async (req, res) => {
  try {
    validateFileExtension(req.file);
    const { body, file: { path, size } } = req;
    nodeMailer(body.email, body.nome, body.mensagem, req.file);
    
    const payload = {
      ...body,
      attachedFile: path,
      size,
      senderIp: ip.address(),
    };
    
    const registeredContact = await recordContactService(payload);
    return res.status(CREATED).json(registeredContact);
  } catch (err) {
    console.error(err);
    return res.status(err.code).json({ message: err.message });
  }
};

module.exports.getContactsController = async (req, res) => {
  try {
    const contacts = await getContactsService();
    return res.status(200).json(contacts);
  } catch (err) {
    return res.status(err.code).json({ message: err.message });
  }
};
