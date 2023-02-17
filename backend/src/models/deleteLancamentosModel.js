const connection = require('./connection');

class DeleteLancamentosModel {
  constructor() {
    this.connection = connection;
  }

  async dropLancamentos() {
    await this.connection.execute(`
      DROP TABLE IF EXISTS psIdata.lancamentosContasPagar;
    `);
  }
}

module.exports = DeleteLancamentosModel;
