-- CreateTable
CREATE TABLE lotesContasPagar
SELECT
	dt_pgto_cop AS 'data',
  lote AS 'lote',
  cod_banco AS 'codigo_do_banco',
  sum(vlr_pgto_cop) AS 'valor'
FROM contaspagar
  WHERE dt_pgto_cop BETWEEN '2022-12-01 00:00:00' AND '2023-01-30 00:00:00'
  GROUP BY dt_pgto_cop, lote, cod_banco;

-- CreateTable
CREATE TABLE semLoteContasPagar
SELECT
	dt_pgto_cop AS 'data',
  lote AS 'lote',
  cod_banco AS 'codigo_do_banco',
  vlr_pgto_cop AS 'valor'
FROM contaspagar
  WHERE dt_pgto_cop BETWEEN '2022-12-01 00:00:00' AND '2022-12-31 00:00:00';