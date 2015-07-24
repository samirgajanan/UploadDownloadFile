var express  = require('express');
var path = require('path');  // add path to set and get
var fs = require('fs');  // add filesystem
var connect = require('connect');

var app  = express();
var port = process.env.PORT || 3000; // run on the port 3000

var routes = require('./routes/index');
var users = require('./routes/users');
 
var app = express();

// view engine setup and directory name
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//add comfoguration
app.use(express.static(__dirname + '/public'));
app.use(connect.cookieParser());
app.use(connect.logger('dev'));
app.use(connect.bodyParser());
app.use(connect.json());
app.use(connect.urlencoded());

app.use('/', routes);
app.use('/users', users);

// listen at port 3000
app.listen(port);
console.log('The Server runs on port ' + port);