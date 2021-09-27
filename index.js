var express = require("express");
var port = process.env.PORT || 3000;
var http = require("http");

var app = express();

app.get("/", (req, res) => {
    res.send("Ola mundo!!!");
});

app.listen(() => {
    console.log("Express server listening on port " + port);
})

http.createServer(app).listen(port, (err, server) => {
    console.log("Server listening on port " + port);
    console.log("error: ", err);
    console.log("server: ", server);
})