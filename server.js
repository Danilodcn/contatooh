

var path = require("./config/variables");
var http = require('http');
var app = require('./config/express')();
require("dotenv").config(path);

PORT = app.get('port');

http.createServer(app).listen(PORT, function() {
    console.log('Express server listening' + PORT);
    console.log("NODE_ENV = " + process.env.NODE_ENV);
});