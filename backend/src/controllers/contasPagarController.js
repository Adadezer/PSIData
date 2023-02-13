const LotesContasPagarService = require('../services/contasPagarService');

class LotesContasPagarController {
  LotesContasPagarService = new LotesContasPagarService();

  async getAllLotesContasPagar(_req, res) {
    const getLotes = await this.LotesContasPagarService.getAllLotesContasPagar();

    return res.status(200).json(getLotes);
  }

  async getAllColumnsLotesContasPagar(_req, res) {
    const getColumns = await this.LotesContasPagarService.getAllColumnsLotesContasPagar();

    return res.status(200).json(getColumns);
  }
}

module.exports = LotesContasPagarController;
