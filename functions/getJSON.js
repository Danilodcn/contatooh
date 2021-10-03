const axios = require('axios');

module.exports = async function (number) {
    var url = `http://www.wjr.eti.br/nameGenerator/index.php?q=${number}&o=json`
    const response = await axios.get(url)    
    return response.data;
}
