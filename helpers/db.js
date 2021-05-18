//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://eiden:Shibashis*12@cluster0.rupja.mongodb.net/youtube_video?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

function connect() {
  return mongoose.connect(mongoDB, options)
      .then(() => {
        console.log('Connected to mongodb');
      })
      .catch((err) => {
        console.log('Couldnt connect to mongodb:', err.message);
        process.exit(1);
      });
}

function close() {
  return mongoose.connection.close();
}

module.exports = {
  connect,
  close,
};