const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const InDatabaseNotExtractController = require('../controllers/inDatabaseNotExtractController');
const SemLoteContasPagarController = require('../controllers/semLoteContasPagarController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');

const inDatabaseNotExtractController = new InDatabaseNotExtractController();
const semLoteContasPagarController = new SemLoteContasPagarController();
const uploadExtratoController = new UploadExtratoContoller();

Router.get(
  '/inDatabaseNotExtract',
  (_req, res) => inDatabaseNotExtractController.getAllEntry(_req, res),
);

Router.get(
  '/columnsInDatabaseNotExtract',
  (_req, res) => inDatabaseNotExtractController.getAllColumnsEntry(_req, res),
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
