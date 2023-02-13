const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const LotesContasPagarController = require('../controllers/contasPagarController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');

const lotesContasPagarController = new LotesContasPagarController();
const uploadExtratoController = new UploadExtratoContoller();

Router.get(
  '/lotesContasPagar',
  (_req, res) => lotesContasPagarController.getAllLotesContasPagar(_req, res),
);

Router.get(
  '/columnsLotesContasPagar',
  (_req, res) => lotesContasPagarController.getAllColumnsLotesContasPagar(_req, res),
);

Router.post(
  '/uploadExtrato',
  multerConfig.single('file'),
  (req, res) => uploadExtratoController.uploadExtrato(req, res),
);

module.exports = Router;
