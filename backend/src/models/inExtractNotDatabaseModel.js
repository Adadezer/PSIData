const connection = require('./connection');

class InExtractNotDatabaseModel {
  constructor() {
    this.connection = connection;
  }

  async getAllEntry() {
    const result = await this.connection.execute(`
      SELECT
        Extrato.data,
        Extrato.valor
      FROM psIdata.Extrato
      RIGHT JOIN psIdata.lancamentosContasPagar
      ON lancamentosContasPagar.valor = Extrato.valor
      WHERE lancamentosContasPagar.valor IS NULL;
    `);

    const [rows] = result;
    return rows;
  }

  async getAllColumnsEntry() {
    const result = await this.connection.execute(`
      SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'Extrato'
    `);
    const [columnName] = result;
    return columnName;
  }
}

module.exports = InExtractNotDatabaseModel;
