const Router = require('express').Router();
const multer = require('multer');

const multerConfig = multer();
const PostsContasPagarController = require('../controllers/postsContasPagarController');
const InDatabaseNotExtractController = require('../controllers/inDatabaseNotExtractController');
const InExtractNotDatabaseController = require('../controllers/inExtractNotDatabaseController');
const HaveInTwoTablesController = require('../controllers/haveInTwoTablesController');
const UploadExtratoContoller = require('../controllers/uploadExtratoController');
const DeleteLancamentosController = require('../controllers/deleteLancamentosController');

const postsContasPagarController = new PostsContasPagarController();
const inDatabaseNotExtractController = new InDatabaseNotExtractController();
const inExtractNotDatabaseController = new InExtractNotDatabaseController();
const haveInTwoTablesController = new HaveInTwoTablesController();
const uploadExtratoController = new UploadExtratoContoller();
const deleteLancamentosController = new DeleteLancamentosController();

Router.post(
  '/lancamentosContasPagar',
  (req, res) => postsContasPagarController.postLancamentosContasPagar(req, res),
);

Router.get(
  '/columnsLancamentosContasPagar',
  (_req, res) => postsContasPagarController.getAllColumnsLancamentosContasPagar(_req, res),
);

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

Router.get(
  '/haveInTwoTables',
  (_req, res) => haveInTwoTablesController.getAllEntry(_req, res),
);

Router.get(
  '/columnsHaveInTwoTables',
  (_req, res) => haveInTwoTablesController.getAllColumnsEntry(_req, res),
);

Router.post(
  '/uploadExtrato',
  multerConfig.single('file'),
  (req, res) => uploadExtratoController.uploadExtrato(req, res),
);

Router.delete(
  '/deleteLancamentos',
  (_req, res) => deleteLancamentosController.dropLancamentos(_req, res),
);

module.exports = Router;
