const { CREATED } = require('http-status-codes').StatusCodes;
const ip = require('ip');
const { recordContactService } = require('../../services');
const { validateFileExtension } = require('../../validate');

const recordContactController = async (req, res) => {
  try {
    validateFileExtension(req.file);
    const { body, file: { path, size } } = req;

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

module.exports = recordContactController;