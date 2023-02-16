const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const InDatabaseNotExtractController = require('../controllers/inDatabaseNotExtractController');
const InExtractNotDatabaseController = require('../controllers/inExtractNotDatabaseController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');

const inDatabaseNotExtractController = new InDatabaseNotExtractController();
const inExtractNotDatabaseController = new InExtractNotDatabaseController();
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
  '/inExtractNotDatabase',
  (_req, res) => inExtractNotDatabaseController.getAllEntry(_req, res),
);

Router.get(
  '/columnsInExtractNotDatabase',
  (_req, res) => inExtractNotDatabaseController.getAllColumnsEntry(_req, res),
);

Router.post(
  '/uploadExtrato',
  multerConfig.single('file'),
  (req, res) => uploadExtratoController.uploadExtrato(req, res),
);

module.exports = Router;
