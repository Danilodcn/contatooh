

var path = require("./config/variables");
var http = require('http');
var app = require('./config/express')();
var getJSON = require("./functions/getJSON")

PORT = app.get('port');

require("dotenv").config(path);

http.createServer(app).listen(PORT, async function() {
    console.log('Express server listening on port ' + PORT);
    console.log("Run im mode: ", process.env.NODE_ENV)
    console.log('Folder = ', app.get('folder'));
    console.log('Valor = ', app.get('teste'));
    console.log("NODE_ENV = " + process.env.NODE_ENV);
    // p = getJSON(30)
    // console.log(await p);
    // z = app.get("json")
    // console.log(z)
    console.log("key: ", app.get("danilo"))
});