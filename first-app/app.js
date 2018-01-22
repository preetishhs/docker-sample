var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var path    = require("path");
var app = express();

var port = process.env.PORT || 8080,
        ip   = process.env.IP || '127.0.0.1';

app.use(cors());
app.use(logger('dev'));

app.get('/', function(req, res) {
         res.sendfile(path.join(__dirname+'/index.html'));
});

var name = process.env.NAME || 'Preetish HS';
var company = process.env.COMPANY || 'Mitel';

app.get('/data', function(req, res) {
        res.status(200).send({'name':name,'Company':company});
});

app.use('*', function(req, res) {
        res.status(404).send({'message':'Requested resource not found on server'});
});

try {
        app.listen(port);
        console.log('Server running on http://%s:%s', ip, port);
}
catch(e) {
        console.info('Could not start the server: ' + e.message);
}

module.exports = app;