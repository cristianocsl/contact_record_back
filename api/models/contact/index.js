const connection = require('../connection');

const record = async (contactInformation) => {
  const db = await connection();
  const { insertedId } = await db.collection('contact').insertOne(contactInformation);
  return { _id: insertedId };
};

module.exports = record;