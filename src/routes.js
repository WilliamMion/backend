const express = require("express");
const routes = express.Router();
const clienteController = require('./controllers/ClienteController')
const produtoController = require('./controllers/ProdutoController');
const VendaController = require("./controllers/VendaController");
const vendaController = require("./controllers/VendaController");

//rotas de cliente
routes.post('/cliente/cadastro', clienteController.cadastrar)
routes.get('/cliente/listar', clienteController.listar)
routes.get('/cliente/busca/:id', clienteController.buscar)
routes.put('/cliente/atualizar/:id', clienteController.atualizar)
routes.delete('/cliente/apagar/:id', clienteController.apagar)

//rotas de produtos
routes.post('/produto/cadastro', produtoController.cadastrar)
routes.get('/produto/listar', produtoController.listar)
routes.put('/produto/atualizar/:id', produtoController.atualizar)
routes.get('/produto/busca/:id', produtoController.buscar)
routes.delete('/produto/apagar/:id', produtoController.apagar)

//rotas de vendas

routes.post('/venda/cadastro', VendaController.cadastrar)
routes.get('/venda/busca/:id', VendaController.buscar)
routes.get('/venda/listar', VendaController.listar)
routes.delete('/venda/apagar/:id', VendaController.apagar)

module.exports = routes;