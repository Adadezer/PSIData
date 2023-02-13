const connection = require('../models/connection');
const LotesContasPagarModel = require('../models/contasPagarModel');

class LotesContasPagarService {
  constructor() {
    this.model = new LotesContasPagarModel(connection);
  }

  async getAllLotesContasPagar() {
    const getLotes = await this.model.getAllLotesContasPagar();
    return getLotes;
  }

  async getAllColumnsLotesContasPagar() {
    const getColumns = await this.model.getAllColumnsLotesContasPagar();
    return getColumns;
  }
}

module.exports = LotesContasPagarService;
