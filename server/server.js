var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var passport = require('passport');


dotenv.load();

var mode = process.env.APPLICATION_MODE;
var app = express();

var router = express.Router();
global.appRoot = path.resolve(__dirname);

// path to start up client application
app.use(express.static(path.join(__dirname, '../www.ui.client/dist')));



app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'ewrtestDemo90454fdfdhfddd',
    resave: true,
    saveUninitialized: true
}));




var port = process.env.port || 4000;

app.set('port', port);
app.all('/', function (req, res, next) {
//server level api logic
    next();
});


// initialization of module level
var api = require('./testdemo.api/api.testdemo.module');
new api(app, router).initialize();


//satrt of node server listening
var server=app.listen(port, function() {
    console.log('listening on port' + port);
});
module.exports = server