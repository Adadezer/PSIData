const connection = require('./connection');

class HaveInTwoTablesModel {
  constructor() {
    this.connection = connection;
  }

  async getAllEntry() {
    const result = await this.connection.execute(`
      SELECT
        lancamentosContasPagar.data,
        lancamentosContasPagar.lote,
        lancamentosContasPagar.codigo_do_banco,
        lancamentosContasPagar.valor
      FROM psIdata.lancamentosContasPagar
      INNER JOIN psIdata.Extrato
      ON lancamentosContasPagar.valor = Extrato.valor;
    `);
    const [rows] = result;
    return rows;
  }

  async getAllColumnsEntry() {
    const result = await this.connection.execute(`
      SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'lancamentosContasPagar'
    `);
    const [columnName] = result;
    return columnName;
  }
}

module.exports = HaveInTwoTablesModel;
