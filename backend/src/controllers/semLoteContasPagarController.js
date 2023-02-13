const SemLoteContasPagarService = require('../services/semLoteContasPagarService');

class SemLoteContasPagarController {
  SemLoteContasPagarService = new SemLoteContasPagarService();

  async getAllSemLoteContasPagar(_req, res) {
    const getLancamentos = await this.SemLoteContasPagarService.getAllSemLoteContasPagar();

    return res.status(200).json(getLancamentos);
  }

  async getAllColumnsSemLoteContasPagar(_req, res) {
    const getColumns = await this.SemLoteContasPagarService.getAllColumnsSemLoteContasPagar();

    return res.status(200).json(getColumns);
  }
}

module.exports = SemLoteContasPagarController;
