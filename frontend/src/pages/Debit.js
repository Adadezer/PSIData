import React from 'react';
import TableInDatabaseNotExtract from '../components/contasPagarDebits/TableInDatabaseNotExtract';
import TableInExtractNotDatabase from '../components/contasPagarDebits/TableInExtractNotDatabase';
import TableHaveInTwoTables from '../components/contasPagarDebits/TableHaveInTwoTables';
import ButtonUpload from '../components/contasPagarDebits/ButtonUpload';
import FilterProvider from '../context/FilterProvider';
import Filter from '../components/contasPagarDebits/Filter';
import '../App.css';

function Home() {
  return (
    <FilterProvider>

      <h3>Envie o extrato (.csv) válido para a comparação</h3>
      <ButtonUpload />

      <h3>Escolha o periodo da data, e o código do banco</h3>
      <Filter />

      <h2>Registros existentes no banco, mas não no extrato</h2>
      <TableInDatabaseNotExtract />

      <h2>Registros existentes no extrato, mas não no banco</h2>
      <TableInExtractNotDatabase />

      <h2>Registros existentes em ambos</h2>
      <TableHaveInTwoTables />
    </FilterProvider>
  );
}

export default Home;
