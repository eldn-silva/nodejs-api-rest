const express = require('express'); // importando o express
const consign = require('consign'); // importando o consign. Seu intuitp é agrupar as rotas que serão criadas
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express(); // atribuindo o express a uma constante

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    consign()
        .include('controllers') // Inclusão de todos os módulos de controllers dentro de app
        .into(app)

    return app
}
