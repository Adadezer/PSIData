const uploadExtratoService = require('../services/uploadExtratoService');

class UploadExtratoContoller {
  constructor() {
    this.uploadExtratoService = uploadExtratoService;
  }

  async uploadExtrato(req, res) {
    const { file } = req;
    const { buffer } = file;

    const registrosExtrato = await this.uploadExtratoService(buffer);
    return res.status(200).json(registrosExtrato);
  }
}

module.exports = UploadExtratoContoller;
