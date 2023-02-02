import React, { useContext } from 'react';
import IDataContext from '../context/IDataContext';

function Home() {
  const { testeProvider } = useContext(IDataContext);
  return (
    <>
      <h1>Home</h1>
      <h2>{testeProvider}</h2>
    </>
  );
}

export default Home;
