const Router = require('express').Router();
const ContasPagarController = require('../controllers/contasPagarController');

const contasPagarController = new ContasPagarController();

Router.get('/contasPagar', (_req, res) => contasPagarController.getAllContasPagar(_req, res));

Router.get('/columnsContasPagar', (_req, res) => contasPagarController.getAllColumnsContasPagar(_req, res));

module.exports = Router;
