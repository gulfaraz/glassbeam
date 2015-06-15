var express = require('express');
var glassbeam = express();

var bodyParser = require('body-parser');
glassbeam.use(bodyParser.urlencoded({ 'extended' : true }));
glassbeam.use(bodyParser.json());

var swig = require('swig');
swig.setDefaults({ 'cache' : false });

var port = process.env.PORT || 8080;

glassbeam.engine('html', swig.renderFile);

glassbeam.set('view engine', 'html');
glassbeam.set('views', __dirname + '/views');
glassbeam.set('view cache', false);

glassbeam.use(express.static(__dirname + '/public'), express.Router());
glassbeam.use('/', function (req, res) { res.sendFile('../public/glassbeam/index.html', { 'root' : __dirname }); });

glassbeam.listen(port);
console.log('Port ' + port + ' open and listening for requests');
