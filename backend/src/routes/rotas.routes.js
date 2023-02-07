const Router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const ContasPagarController = require('../controllers/contasPagarController');
const UploadFileController = require('../controllers/uploadFileController');

const contasPagarController = new ContasPagarController();

Router.get('/contasPagar', (_req, res) => contasPagarController.getAllContasPagar(_req, res));

Router.get('/columnsContasPagar', (_req, res) => contasPagarController.getAllColumnsContasPagar(_req, res));

Router.post('/uploadFile', multer(multerConfig).single('file'), (req, res) => UploadFileController.uploadFileController(req, res));

module.exports = Router;
