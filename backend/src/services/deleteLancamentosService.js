const connection = require('../models/connection');
const DeleteLancamentosModel = require('../models/deleteLancamentosModel');

class DeleteLancamentosService {
  constructor() {
    this.model = new DeleteLancamentosModel(connection);
  }

  async dropLancamentos() {
    await this.model.dropLancamentos();
  }
}

module.exports = DeleteLancamentosService;
