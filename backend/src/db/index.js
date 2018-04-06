import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

class Database {
  constructor() {
    this._connect();
  }

  static _connect() {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error');
      });
  }
}
module.exports = Database._connect();
