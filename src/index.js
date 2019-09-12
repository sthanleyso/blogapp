const express = require('express');
const handlebars = require('express-handlebars');
const http = require('http');
const createError = require('http-errors');
const path = require('path');
const mongoose = require('mongoose');

const indexRouter = require('./routes');
const adminRouter = require('./routes/admin');

const app = express();
const server = http.Server(app);

app.set('views', path.resolve(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
mongoose.connect('mongodb://localhost:27017/blogapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB error', err));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
  next();
});

const PORT = process.env.PORT || 3333;

async function startServer() {
  try {
    server.listen(PORT, () => console.info(`Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Server error', err);
  }
}

startServer();
