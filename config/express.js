var express = require("express");
// var home = require("../app/routes/home");
var load = require("express-load");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

module.exports = function () {
    var app = express();
    
    //configuração das variáveis de ambiente
    app.set("port", process.env.PORT);
    
    // middleware
    app.use(express.static("./public"))
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // config views
    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    app.set("folder", process.cwd());
    // configutação das rotas
    // app = home(app)

    // Configuração do express load
    load("models", {cwd: "app"})
        .then("controllers")
        .then("routes")
        .into(app);

    return app;
};
