const connection = require('../models/connection');
const ContasPagarModel = require('../models/contasPagarModel');

class ContasPagarService {
  constructor() {
    this.model = new ContasPagarModel(connection);
  }

  async getAllContasPagar() {
    const getContasPagar = await this.model.getAllContasPagar();
    return getContasPagar;
  }

  async getAllColumnsContasPagar() {
    const getColumns = await this.model.getAllColumnsContasPagar();
    return getColumns;
  }
}

module.exports = ContasPagarService;
