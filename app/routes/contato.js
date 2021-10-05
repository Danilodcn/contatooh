
module.exports = (app) => {

    var controller = app.controllers.contato;
    app.get("/contatos/:n", controller.listaContatos);
    app.get("/contatos/:n/:id", controller.obtemContatos);
    // app.get("/contato", controller.listaContato);
    app.set('danilo', controller);
}