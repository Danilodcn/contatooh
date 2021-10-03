
module.exports = (app) => {

    var controller = app.controllers.contato;
    app.get("/contatos/:id", controller.listaContatos);
    // app.get("/contato", controller.listaContato);
    app.set('danilo', controller);
}