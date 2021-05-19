//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = require('../config/config').db_credentials.MONGO_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log('DB connected');
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

module.exports = connectDB;