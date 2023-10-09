const express = require('express');
const route = express.Router();

const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeController');
const ferramentaController = require('./src/controllers/ferramentaController');
const middleware = require('./src/middlewares/middlewares');
//login
route.get('/', loginController.indexLogin);//pagina inicial

route.post('/login', loginController.login);//post do login

route.get('/home', homeController.home);//get home

route.get('/ferramenta', ferramentaController.indexFerramenta);//get ferramenta

route.post('/ferramenta/upload', ferramentaController.ferramenta);//post ferramenta upload

route.get('/logout', loginController.logout);//deslogar da conta

route.get('/login/cadastro', loginController.indexCadastro);//pagina cadastro

route.post('/login/cadastro', loginController.cadastro);//post cadastro//retorna para indexLogin

module.exports = route;