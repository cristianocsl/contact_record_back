const { CREATED } = require('http-status-codes').StatusCodes;
const { recordContactService } = require('../../services');

module.exports.recordContactController = async (req, res) => {
  const reqBody = req.body;
  try {
    const registeredContact = await recordContactService(reqBody);
    return res.status(CREATED).json(registeredContact);
  } catch (err) {
    return res.status(err.code).json({ message: err.message });
  }
};