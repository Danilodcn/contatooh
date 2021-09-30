
var controller = {};

controller.index = function(req, res){
    object = {nome: 'Express'};
    res.render('index', object);
    res.render("/", object)
}


module.exports = function(){
    return controller;
}
