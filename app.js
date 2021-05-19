var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const SearchVideo = require('./routes/searchVideo');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/getAll', require('./routes/getAll'));
app.use('/search', async (req, res) => {
  try {
      let video_title = req.query.video_title;
      const result = await SearchVideo.searchVideo(
          video_title
      );
      return res.status(200).send({success: true, data: result});
  } catch (err) {
      console.log(err);
      res.status(500).send({success: false, msg: 'Failiure', data : err});
  }
});

app.get('/', function(req, res, next){
  res.render('index', { title:'Youtube API' });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
