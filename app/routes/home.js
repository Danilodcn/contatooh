// var controller = require(process.cwd() + "/app/controllers/home")();


module.exports = function(app){
    var controller = app.controllers.home; 
    app.get("/index", controller.index)
    app.get("/", controller.index)
    return app;
}