const connection = require('../connection');

module.exports.recordModel = async (contactInformation) => {
  const db = await connection();
  const { insertedId } = await db.collection('contact').insertOne(contactInformation);
  return { _id: insertedId };
};
