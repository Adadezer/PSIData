const connection = require('./connection');

class LotesContasPagarModel {
  constructor() {
    this.connection = connection;
  }

  async getAllLotesContasPagar() {
    const result = await this.connection.execute(`
      SELECT lotesContasPagar.data, lotesContasPagar.lote, lotesContasPagar.codigo_do_banco, lotesContasPagar.valor
      FROM psIdata.lotesContasPagar
      LEFT JOIN psIdata.Extrato
      ON lotesContasPagar.valor = Extrato.valor
      WHERE Extrato.valor IS NULL;
    `);
    const [rows] = result;
    return rows;
  }

  async getAllColumnsLotesContasPagar() {
    const result = await this.connection.execute(`
      SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'lotesContasPagar'
    `);
    const [columnName] = result;
    return columnName;
  }
}

module.exports = LotesContasPagarModel;
