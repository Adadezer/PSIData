import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [nameColumnsLotesContasPagar, setNameColumnsLotesContasPagar] = useState([]);
  const [dataLotesContasPagar, setDataLotesContasPagar] = useState([]);
  const [nameColumnsSemLoteContasPagar, setNameColumnsSemLoteContasPagar] = useState([]);
  const [dataSemLoteContasPagar, setDataSemLoteContasPagar] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const myContext = useMemo(() => ({
    nameColumnsLotesContasPagar,
    setNameColumnsLotesContasPagar,
    dataLotesContasPagar,
    setDataLotesContasPagar,
    nameColumnsSemLoteContasPagar,
    setNameColumnsSemLoteContasPagar,
    dataSemLoteContasPagar,
    setDataSemLoteContasPagar,
    shouldRefresh,
    setShouldRefresh,
  }), [nameColumnsLotesContasPagar, dataLotesContasPagar, nameColumnsSemLoteContasPagar, dataSemLoteContasPagar, shouldRefresh]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
