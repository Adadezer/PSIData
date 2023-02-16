const connection = require('../models/connection');
const InDatabaseNotExtractModel = require('../models/inDatabaseNotExtractModel');

class InDatabaseNotExtractService {
  constructor() {
    this.model = new InDatabaseNotExtractModel(connection);
  }

  async getAllEntry() {
    const getEntrys = await this.model.getAllEntry();
    return getEntrys;
  }

  async getAllColumnsEntry() {
    const getColumns = await this.model.getAllColumnsEntry();
    return getColumns;
  }
}

module.exports = InDatabaseNotExtractService;
