const connection = require('../connection');

module.exports.recordContactModel = async (contactInformation) => {
  const db = await connection();
  const { insertedId } = await db.collection('contact').insertOne(contactInformation);
  return { _id: insertedId };
};

module.exports.getContactsModel = async () => {
  const db = await connection();
  const contacts = await db.collection('contact').find().toArray();
  return contacts;
};
