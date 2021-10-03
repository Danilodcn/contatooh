
var getJSON = require("./../../functions/getJSON");
var getRandomInt = require("../../functions/getRandomInt")


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
// var contatos = [
//     {_id: 1, nome: 'Contato Exemplo 1',
//     email: 'cont1@empresa.com.br'},
//     {_id: 2, nome: 'Contato Exemplo 2',
//     email: 'cont2@empresa.com.br'},
//     {_id: 3, nome: 'Contato Exemplo 3',
//     email: 'cont3@empresa.com.br'}
//     ]

module.exports = function () {
    var controller = {};
    controller.listaContatos = async function (req, res) {
        const { id } = req.params;
        console.log("teste", id)
        contatos = await getJSON(id)
        
        _contatos = []

        contatos.forEach((elem, index, list) => {
            novo = {}
            novo.nome = elem
            novo.email = replaceAll(elem, " ", "_") + "@gmail.com"
            n = 11111111111
            novo.telefone = getRandomInt(n, n * 9)
            _contatos.push(novo);
        })
        
        console.log("contatos", contatos)
        console.log("contatos", _contatos)
        res.json(_contatos);
    };
    return controller; 
}