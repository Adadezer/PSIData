import React from 'react';
import TabelaLotesContasPagar from '../components/TabelaLotesContasPagar';
import TabelaSemLoteContasPagar from '../components/TabelaSemLoteContasPagar';

function Home() {
  return (
    <>
      <h1>Comparação Mês: Dezembro</h1>

      <h2>Registros com lotes</h2>
      <TabelaLotesContasPagar />

      <h2>Registros sem Lote</h2>
      <TabelaSemLoteContasPagar />
    </>
  );
}

export default Home;
