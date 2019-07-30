var createError = require('http-errors');
var express = require('express');
var path = require('path');


var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var indexSalas = require('./src/routes/salas');
var ocorrenciaRouter = require('./src/routes/ocorrencias');
var relatorioRouter = require('./src/routes/relatorios');
var autorizacao = require('./src/routes/autorizações');
var docente = require('./src/routes/docentes');

var app = express();

app.set('view engine','hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/salas',indexSalas);
app.use('/ocorrencias', ocorrenciaRouter);
app.use('/relatorios', relatorioRouter);
app.use('/autorizacoes', autorizacao);
app.use('/docentes', docente);


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
  res.send('error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server started on ${PORT}`));

