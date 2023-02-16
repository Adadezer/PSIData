const InDatabaseNotExtractService = require('../services/inDatabaseNotExtractService');

class InDatabaseNotExtractController {
  InDatabaseNotExtractService = new InDatabaseNotExtractService();

  async getAllEntry(_req, res) {
    const getEntrys = await this.InDatabaseNotExtractService.getAllEntry();

    return res.status(200).json(getEntrys);
  }

  async getAllColumnsEntry(_req, res) {
    const getColumns = await this.InDatabaseNotExtractService.getAllColumnsEntry();

    return res.status(200).json(getColumns);
  }
}

module.exports = InDatabaseNotExtractController;
