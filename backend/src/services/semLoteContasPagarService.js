const connection = require('../models/connection');
const SemLoteContasPagarModel = require('../models/semLoteContasPagarModel');

class SemLoteContasPagarService {
  constructor() {
    this.model = new SemLoteContasPagarModel(connection);
  }

  async getAllSemLoteContasPagar() {
    const getLacamento = await this.model.getAllSemLoteContasPagar();
    return getLacamento;
  }

  async getAllColumnsSemLoteContasPagar() {
    const getColumns = await this.model.getAllColumnsSemLoteContasPagar();
    return getColumns;
  }
}

module.exports = SemLoteContasPagarService;
