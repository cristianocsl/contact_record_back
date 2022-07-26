const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = `mongodb://${'localhost' || 'mongodb'}:27017`;
const DB_NAME = 'MSBTecDB';

let db = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }).catch((err) => {
      console.error(err.message);
      process.exit(1);
    }));

    module.exports = connection;