import React from 'react';
import TableInDatabaseNotExtract from '../components/TableInDatabaseNotExtract';
import TabelaSemLoteContasPagar from '../components/TabelaSemLoteContasPagar';
import ButtonSend from '../components/BotaoEnviar';
import '../App.css';

function Home() {
  return (
    <>
      <h1>Mês: Dezembro</h1>

      <h3>Envie o extrato válido (.csv) para a comparação</h3>

      <ButtonSend />

      <h2>Registros existentes no banco, mas não no extrato</h2>
      <TableInDatabaseNotExtract />

      <h2>Registros existentes no extrato, mas não no banco</h2>
      <TabelaSemLoteContasPagar />
    </>
  );
}

export default Home;
