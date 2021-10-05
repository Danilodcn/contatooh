var getRandomInt = require("./getRandomInt")

module.exports = function (lista){
    n = getRandomInt(0, lista.length);
    return lista[n];
}