import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [nameColumnsContasPagar, setNameColumnsContasPagar] = useState([]);
  const [dataContasPagar, setDataContasPagar] = useState([]);

  const myContext = useMemo(() => ({
    nameColumnsContasPagar,
    setNameColumnsContasPagar,
    dataContasPagar,
    setDataContasPagar,
  }), [nameColumnsContasPagar, dataContasPagar]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
