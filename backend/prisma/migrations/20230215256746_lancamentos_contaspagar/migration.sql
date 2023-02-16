CREATE TABLE lancamentosContasPagar
SELECT
  dt_pgto_cop AS 'data',
	lote AS 'lote',
	cod_banco AS 'codigo_do_banco',
	sum(vlr_pgto_cop) AS 'valor'
FROM contaspagar
	WHERE dt_pgto_cop BETWEEN '2022-12-01 00:00:00' AND '2022-12-31 00:00:00' AND IFNULL( lote, '') != ''
	GROUP BY dt_pgto_cop, lote, cod_banco
UNION
SELECT
	dt_pgto_cop AS 'data',
	lote AS 'lote',
	cod_banco AS 'codigo_do_banco',
	vlr_pgto_cop AS 'valor'
FROM contaspagar
	WHERE dt_pgto_cop BETWEEN '2022-12-01 00:00:00' AND '2022-12-31 00:00:00' AND IFNULL( lote, '') = '';