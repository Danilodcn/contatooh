var express = require("express");
// var home = require("../app/routes/home");
var load = require("express-load");

module.exports = function () {
    var app = express();
    
    //configuração das variáveis de ambiente
    app.set("port", process.env.PORT);
    
    // middleware
    // app.use(express.static("./public"))


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
