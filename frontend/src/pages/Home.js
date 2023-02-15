import React from 'react';
import TabelaLotesContasPagar from '../components/TabelaLotesContasPagar';
import TabelaSemLoteContasPagar from '../components/TabelaSemLoteContasPagar';
import ButtonSend from '../components/BotaoEnviar';
import '../App.css';

function Home() {
  return (
    <>
      <h1>Mês: Dezembro</h1>

      <h3>Envie o extrato válido (.csv) para a comparação</h3>

      <ButtonSend />

      <h2>Registros com lotes</h2>
      <TabelaLotesContasPagar />

      <h2>Registros sem Lote</h2>
      <TabelaSemLoteContasPagar />
    </>
  );
}

export default Home;
