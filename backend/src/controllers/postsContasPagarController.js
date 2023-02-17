const PostsContasPagarService = require('../services/postsContasPagarService');

class PostsContasPagarController {
  PostsContasPagarService = new PostsContasPagarService();

  async postLancamentosContasPagar(req, res) {
    const { dataInicio, dataFim, codBanco } = req.body;
    const postEntrys = await
    this.PostsContasPagarService.postLancamentosContasPagar(dataInicio, dataFim, codBanco);

    return res.status(200).json(postEntrys);
  }

  async getAllColumnsLancamentosContasPagar(_req, res) {
    const getColumns = await this.PostsContasPagarService.getAllColumnsLancamentosContasPagar();

    return res.status(200).json(getColumns);
  }
}

module.exports = PostsContasPagarController;
