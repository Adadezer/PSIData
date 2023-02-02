const ContasPagarService = require('../services/contasPagarService');

class ContasPagarController {
  contasPagarService = new ContasPagarService();

  async getAllContasPagar(_req, res) {
    const getContasPagar = await this.contasPagarService.getAllContasPagar();

    res.status(200).json(getContasPagar);
  }
}

module.exports = ContasPagarController;
