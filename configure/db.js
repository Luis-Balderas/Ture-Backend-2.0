const mongoose = require('mongoose');
const mongodb = process.env.MONGO_CONNECTION;

mongoose.Promise = global.Promise;

async function connect() {
  await mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('[db] Conectada con exito');
}
connect();

const db = mongoose.connection;

module.exports = db;
