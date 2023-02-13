import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [nameColumnsLotesContasPagar, setNameColumnsLotesContasPagar] = useState([]);
  const [dataLotesContasPagar, setDataLotesContasPagar] = useState([]);

  const myContext = useMemo(() => ({
    nameColumnsLotesContasPagar,
    setNameColumnsLotesContasPagar,
    dataLotesContasPagar,
    setDataLotesContasPagar,
  }), [nameColumnsLotesContasPagar, dataLotesContasPagar]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
