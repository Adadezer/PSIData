const { Readable } = require('stream');
const readline = require('readline');

const client = require('../database/client');

const uploadExtratoService = async (buffer) => {
  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const extratoLine = readline.createInterface({
    input: readableFile,
  });

  const registrosExtrato = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of extratoLine) {
    const extratoCharacter = line.replace(/["]/g, '');
    const extratoLineSeparator = extratoCharacter.split(',');

    if (extratoLineSeparator[4] === 'DEBIT') {
      registrosExtrato.push({
        data: extratoLineSeparator[0],
        descricao: extratoLineSeparator[1],
        identificacao: extratoLineSeparator[2],
        check: extratoLineSeparator[3],
        tipo: extratoLineSeparator[4],
        valor: extratoLineSeparator[4] === 'DEBIT'
          ? parseFloat(`${extratoLineSeparator[5] * -1}`)
          : parseFloat(`${extratoLineSeparator[5]}`),
      });
    }
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

  return registrosExtrato;
};

module.exports = uploadExtratoService;
