import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [nameColumnsInDatabaseNotExtract, setNameColumnsInDatabaseNotExtract] = useState([]);
  const [dataInDatabaseNotExtract, setDataInDatabaseNotExtract] = useState([]);
  const [nameColumnsSemLoteContasPagar, setNameColumnsSemLoteContasPagar] = useState([]);
  const [dataSemLoteContasPagar, setDataSemLoteContasPagar] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const myContext = useMemo(() => ({
    nameColumnsInDatabaseNotExtract,
    setNameColumnsInDatabaseNotExtract,
    dataInDatabaseNotExtract,
    setDataInDatabaseNotExtract,
    nameColumnsSemLoteContasPagar,
    setNameColumnsSemLoteContasPagar,
    dataSemLoteContasPagar,
    setDataSemLoteContasPagar,
    shouldRefresh,
    setShouldRefresh,
  }), [nameColumnsInDatabaseNotExtract, dataInDatabaseNotExtract, nameColumnsSemLoteContasPagar, dataSemLoteContasPagar, shouldRefresh]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
