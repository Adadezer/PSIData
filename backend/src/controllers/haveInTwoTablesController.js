const HaveInTwoTablesService = require('../services/haveInTwoTablesService');

class HaveInTwoTablesController {
  HaveInTwoTablesService = new HaveInTwoTablesService();

  async getAllEntry(_req, res) {
    const getEntrys = await this.HaveInTwoTablesService.getAllEntry();

    return res.status(200).json(getEntrys);
  }

  async getAllColumnsEntry(_req, res) {
    const getColumns = await this.HaveInTwoTablesService.getAllColumnsEntry();

    return res.status(200).json(getColumns);
  }
}

module.exports = HaveInTwoTablesController;
