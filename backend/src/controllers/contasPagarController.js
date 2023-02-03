const ContasPagarService = require('../services/contasPagarService');

class ContasPagarController {
  contasPagarService = new ContasPagarService();

  async getAllContasPagar(_req, res) {
    const getContasPagar = await this.contasPagarService.getAllContasPagar();

    return res.status(200).json(getContasPagar);
  }

  async getAllColumnsContasPagar(_req, res) {
    const getColumns = await this.contasPagarService.getAllColumnsContasPagar();

    return res.status(200).json(getColumns);
  }
}

module.exports = ContasPagarController;
