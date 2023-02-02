const Router = require('express').Router();
const ContasPagarController = require('../controllers/contasPagarController');

const contasPagarController = new ContasPagarController();

Router.get('/contasPagar', (_req, res) => contasPagarController.getAll(_req, res));

module.exports = Router;
