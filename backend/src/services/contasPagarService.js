const connection = require('../models/connection');
const ContasPagarModel = require('../models/contasPagarModel');

class ContasPagarService {
  constructor() {
    this.model = new ContasPagarModel(connection);
  }

  async getAll() {
    const getContasPagar = await this.model.getAll();
    return getContasPagar;
  }
}

module.exports = ContasPagarService;
