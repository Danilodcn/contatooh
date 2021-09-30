

var path = require("./config/variables");
var http = require('http');
var app = require('./config/express')();

PORT = app.get('port');

require("dotenv").config(path);

http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
    console.log("Run im mode: ", process.env.NODE_ENV)
    console.log('Folder = ', app.get('folder'));
    console.log('Valor = ', app.get('teste'));
    console.log("NODE_ENV = " + process.env.NODE_ENV);
});