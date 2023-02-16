const connection = require('../models/connection');
const InExtractNotDatabaseModel = require('../models/inExtractNotDatabaseModel');

class InExtractNotDatabaseService {
  constructor() {
    this.model = new InExtractNotDatabaseModel(connection);
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

module.exports = InExtractNotDatabaseService;
