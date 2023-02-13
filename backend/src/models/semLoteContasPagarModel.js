const connection = require('./connection');

class SemLoteContasPagarModel {
  constructor() {
    this.connection = connection;
  }

  async getAllSemLoteContasPagar() {
    const result = await this.connection.execute(`
      SELECT semLoteContasPagar.data, semLoteContasPagar.lote, semLoteContasPagar.codigo_do_banco, semLoteContasPagar.valor
      FROM psIdata.semLoteContasPagar
      LEFT JOIN psIdata.Extrato
      ON semLoteContasPagar.valor = Extrato.valor
      WHERE Extrato.valor IS NULL
    `);

    const [rows] = result;
    return rows;
  }

  async getAllColumnsSemLoteContasPagar() {
    const result = await this.connection.execute(`
      SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'semLoteContasPagar'
    `);
    const [columnName] = result;
    return columnName;
  }
}

module.exports = SemLoteContasPagarModel;
