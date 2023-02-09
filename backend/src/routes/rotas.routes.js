const Router = require('express').Router();
const multer = require('multer');
const { Readable } = require('stream');
const readline = require('readline');

const multerConfig = multer();
const ContasPagarController = require('../controllers/contasPagarController');
const client = require('../database/client');
// const UploadFileController = require('../controllers/uploadFileController');

const contasPagarController = new ContasPagarController();

// const Extrato = {
//   data: string;
//   descricao: string;
//   identificacao: string;
//   check: string;
//   tipo: string;
//   valor: number;
// }

Router.get(
  '/contasPagar',
  (_req, res) => contasPagarController.getAllContasPagar(_req, res),
);

Router.get(
  '/columnsContasPagar',
  (_req, res) => contasPagarController.getAllColumnsContasPagar(_req, res),
);

Router.post(
  '/upExtrato',
  multerConfig.single('file'),
  async (req, res) => {
    const { file } = req;
    const { buffer } = file;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const extratoLine = readline.createInterface({
      input: readableFile,
    });

    const registrosExtrato = [];

    if (!registrosExtrato.includes(extratoLine)) {
      // eslint-disable-next-line no-restricted-syntax
      for await (const line of extratoLine) {
        const extratoCharacter = line.replace(/["]/g, '');
        const extratoLineSeparator = extratoCharacter.split(',');

        registrosExtrato.push({
          data: extratoLineSeparator[0],
          descricao: extratoLineSeparator[1],
          identificacao: extratoLineSeparator[2],
          check: extratoLineSeparator[3],
          tipo: extratoLineSeparator[4],
          valor: parseFloat(extratoLineSeparator[5]),
        });
      }

      // eslint-disable-next-line no-restricted-syntax
      for await (const {
        data, descricao, identificacao, check, tipo, valor,
      } of registrosExtrato) {
        await client.Extrato.create({
          data: {
            data,
            descricao,
            identificacao,
            check,
            tipo,
            valor,
          },
        });
      }
    }

    return res.json(registrosExtrato);
  },
);
// Router.post(
//   '/uploadFile',
//   multer(multerConfig).single('file'),
//   (req, res) => UploadFileController.uploadFileController(req, res),
// );

module.exports = Router;
