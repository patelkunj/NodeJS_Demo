var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug');

var indexRouter = require('./routes/index');
 var masterRouter = require('./config/routes/masterRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json({
    limit: '5mb',
    extended: true
}));

app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, AuthorizationKey");
    next();
});

app.use('/', indexRouter);
app.use('/master', masterRouter);

/* Route not found! */
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Route not found!'
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});