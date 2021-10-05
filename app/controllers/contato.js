
var getJSON = require("./../../functions/getJSON");
var getRandomInt = require("../../functions/getRandomInt")
var getRandomCoice = require("../../functions/getRandomCoice");
const contato = require("../routes/contato");


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

async function listaContatos(number) {

    contatos = await getJSON(number)
        
    _contatos = [];


    contatos.forEach((elem, index, list) => {
        emails = ["@gmail.com", "@hotmail.com", "@outlook.com"]
        email = getRandomCoice(emails)
        novo = {}
        novo.nome = elem
        novo.email = replaceAll(elem, " ", "_") + email
        n = 11111111111
        novo.telefone = getRandomInt(n, n * 9)
        novo.id = index + 1
        _contatos.push(novo);
    })
    
    return _contatos;
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
        const { n } = req.params;
        // console.log("teste", id)
        contatos = await listaContatos(n);
        res.json(contatos);
    };

    controller.obtemContatos = async function (req, res) {

        var { n, id } = req.params;
        console.log("obtemContatos", n, id);
        var contatos = await listaContatos(n);
        var contato = contatos.filter((contato) => {
            // console.log(id, contato.id)
            return contato.id == id;
        });
        // res.json(contato[id]);
        console.log("obtemContatos", contato)
        if (contato.length === 0){
            res.status(404).send("<h1>Error 404 <br> Contato nao encontrado</h1>");
        }
        else{
            res.json(contato[0]);
        }
            
    };
    return controller; 
}