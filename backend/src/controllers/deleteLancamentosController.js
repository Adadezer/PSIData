const DeleteLancamentosService = require('../services/deleteLancamentosService');

class DeleteLancamentosController {
  DeleteLancamentosService = new DeleteLancamentosService();

  async dropLancamentos(_req, res) {
    await this.DeleteLancamentosService.dropLancamentos();

    return res.status(200).end();
  }
}

module.exports = DeleteLancamentosController;
