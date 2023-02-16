import React from 'react';
import TableInDatabaseNotExtract from '../components/TableInDatabaseNotExtract';
import TableInExtractNotDatabase from '../components/TableInExtractNotDatabase';
import ButtonSend from '../components/ButtonUpload';
import '../App.css';

function Home() {
  return (
    <>
      <h1>Débitos Mês: Dezembro</h1>

      <h3>Envie o extrato (.csv) válido para a comparação</h3>

      <ButtonSend />

      <h2>Registros existentes no banco, mas não no extrato</h2>
      <TableInDatabaseNotExtract />

      <h2>Registros existentes no extrato, mas não no banco</h2>
      <TableInExtractNotDatabase />
    </>
  );
}

export default Home;
