const connection = require('../models/connection');
const PostsContasPagarModel = require('../models/postsContasPagarModel');

class PostsContasPagarService {
  constructor() {
    this.model = new PostsContasPagarModel(connection);
  }

  async postLancamentosContasPagar(dataInicio, dataFim, codBanco) {
    const postEntrys = await this.model.postLancamentosContasPagar(dataInicio, dataFim, codBanco);
    return postEntrys;
  }

  async getAllColumnsLancamentosContasPagar() {
    const getColumns = await this.model.getAllColumnsLancamentosContasPagar();
    return getColumns;
  }
}

module.exports = PostsContasPagarService;
