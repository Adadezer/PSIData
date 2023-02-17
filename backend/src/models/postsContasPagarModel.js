const connection = require('./connection');

class PostsContasPagarModel {
  constructor() {
    this.connection = connection;
  }

  async postLancamentosContasPagar(dataInicio, dataFim, codBanco) {
    const query = `
      CREATE TABLE IF NOT EXISTS psIdata.lancamentosContasPagar
      SELECT
        contaspagar.dt_pgto_cop AS 'data',
        contaspagar.lote AS 'lote',
        contaspagar.cod_banco AS 'codigo_do_banco',
        sum(contaspagar.vlr_pgto_cop) AS 'valor'
      FROM psIdata.contaspagar
        WHERE contaspagar.dt_pgto_cop BETWEEN ? AND ?
        AND contaspagar.cod_banco = ?
        AND IFNULL( lote, '') != ''
        GROUP BY contaspagar.dt_pgto_cop, contaspagar.lote, contaspagar.cod_banco
      UNION
      SELECT
        contaspagar.dt_pgto_cop AS 'data',
        contaspagar.lote AS 'lote',
        contaspagar.cod_banco AS 'codigo_do_banco',
        contaspagar.vlr_pgto_cop AS 'valor'
      FROM psIdata.contaspagar
        WHERE contaspagar.dt_pgto_cop BETWEEN ? AND ?
        AND contaspagar.cod_banco = ?
        AND IFNULL( lote, '') = '';
    `;
    const result = await this.connection.execute(
      query,
      [dataInicio, dataFim, codBanco, dataInicio, dataFim, codBanco],
    );

    return result;
  }

  async getAllColumnsLancamentosContasPagar() {
    const result = await this.connection.execute(`
      SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'lancamentosContasPagar'
    `);
    const [columnName] = result;
    return columnName;
  }
}

module.exports = PostsContasPagarModel;
