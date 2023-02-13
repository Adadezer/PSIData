const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const LotesContasPagarController = require('../controllers/loteContasPagarController');
const SemLoteContasPagarController = require('../controllers/semLoteContasPagarController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');

const lotesContasPagarController = new LotesContasPagarController();
const semLoteContasPagarController = new SemLoteContasPagarController();
const uploadExtratoController = new UploadExtratoContoller();

Router.get(
  '/lotesContasPagar',
  (_req, res) => lotesContasPagarController.getAllLotesContasPagar(_req, res),
);

Router.get(
  '/columnsLotesContasPagar',
  (_req, res) => lotesContasPagarController.getAllColumnsLotesContasPagar(_req, res),
);

Router.get(
  '/semLoteContasPagar',
  (_req, res) => semLoteContasPagarController.getAllSemLoteContasPagar(_req, res),
);

Router.get(
  '/columnsSemLoteContasPagar',
  (_req, res) => semLoteContasPagarController.getAllColumnsSemLoteContasPagar(_req, res),
);

Router.post(
  '/uploadExtrato',
  multerConfig.single('file'),
  (req, res) => uploadExtratoController.uploadExtrato(req, res),
);

module.exports = Router;
