const InExtractNotDatabaseService = require('../services/inExtractNotDatabaseService');

class InExtractNotDatabaseController {
  InExtractNotDatabaseService = new InExtractNotDatabaseService();

  async getAllEntry(_req, res) {
    const getEntrys = await this.InExtractNotDatabaseService.getAllEntry();

    return res.status(200).json(getEntrys);
  }

  async getAllColumnsEntry(_req, res) {
    const getColumns = await this.InExtractNotDatabaseService.getAllColumnsEntry();

    return res.status(200).json(getColumns);
  }
}

module.exports = InExtractNotDatabaseController;
