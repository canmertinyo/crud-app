const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const databaseUri = process.env.DATABASE_URI;

async function connect() {
  mongoose.set('strictQuery', true);
  return mongoose
    .connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('connection established');
    })
    .catch((error) => {
      throw new Error(error);
    });
}

module.exports = connect;
