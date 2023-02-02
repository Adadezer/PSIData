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
}

module.exports = ContasPagarModel;
