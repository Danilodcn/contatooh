var express = require("express");


module.exports = function () {
    var app = express();
    
    //configuração das variáveis de ambiente
    app.set("port", process.env.PORT)
    
    // middleware
    app.use(express.static("./public"))

    return app;
};
