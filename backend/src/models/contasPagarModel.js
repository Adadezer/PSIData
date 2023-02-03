const connection = require('./connection');

class ContasPagarModel {
  constructor() {
    this.connection = connection;
  }

  async getAllContasPagar() {
    const result = await this.connection.execute('SELECT * FROM psIdata.contaspagar');
    const [rows] = result;
    return rows;
  }

  async getAllColumnsContasPagar() {
    const result = await this.connection.execute(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'contaspagar'`,
    );
    const [columnName] = result;
    return columnName;
  }
}

module.exports = ContasPagarModel;
