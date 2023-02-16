const connection = require('../models/connection');
const HaveInTwoTablesModel = require('../models/haveInTwoTablesModel');

class HaveInTwoTablesService {
  constructor() {
    this.model = new HaveInTwoTablesModel(connection);
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

module.exports = HaveInTwoTablesService;
