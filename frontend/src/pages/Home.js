import React from 'react';
import TabelaLotesContasPagar from '../components/TabelaLotesContasPagar';
import TabelaSemLoteContasPagar from '../components/TabelaSemLoteContasPagar';
import ButtonSend from '../components/ButtonSend';
import BotaoRafael from '../components/botaoRafael';

function Home() {
  return (
    <>
      <h1>Comparação Mês: Dezembro</h1>

      <ButtonSend />

      <BotaoRafael />

      <h2>Registros com lotes</h2>
      <TabelaLotesContasPagar />

      <h2>Registros sem Lote</h2>
      <TabelaSemLoteContasPagar />
    </>
  );
}

export default Home;
