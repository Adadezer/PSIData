const Router = require('express').Router();
const ContasPagarController = require('../controllers/contasPagarController');

const contasPagarController = new ContasPagarController();

Router.get('/contasPagar', (_req, res) => contasPagarController.getAllContasPagar(_req, res));

module.exports = Router;
