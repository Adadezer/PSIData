const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const ContasPagarController = require('../controllers/contasPagarController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');

const contasPagarController = new ContasPagarController();
const uploadExtratoController = new UploadExtratoContoller();

Router.get(
  '/contasPagar',
  (_req, res) => contasPagarController.getAllContasPagar(_req, res),
);

Router.get(
  '/columnsContasPagar',
  (_req, res) => contasPagarController.getAllColumnsContasPagar(_req, res),
);

Router.post(
  '/uploadExtrato',
  multerConfig.single('file'),
  (req, res) => uploadExtratoController.uploadExtrato(req, res),
);

module.exports = Router;
