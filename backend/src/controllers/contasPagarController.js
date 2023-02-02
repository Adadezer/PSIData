const ContasPagarService = require('../services/contasPagarService');

class ContasPagarController {
  contasPagarService = new ContasPagarService();

  async getAll(_req, res) {
    const getContasPagar = await this.contasPagarService.getAll();

    res.status(200).json(getContasPagar);
  }
}

module.exports = ContasPagarController;
