import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [nameColumnsInDatabaseNotExtract, setNameColumnsInDatabaseNotExtract] = useState([]);
  const [dataInDatabaseNotExtract, setDataInDatabaseNotExtract] = useState([]);
  const [nameColumnsInExtractNotDatabase, setNameColumnsInExtractNotDatabase] = useState([]);
  const [dataInExtractNotDatabase, setDataInExtractNotDatabase] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const myContext = useMemo(() => ({
    nameColumnsInDatabaseNotExtract,
    setNameColumnsInDatabaseNotExtract,
    dataInDatabaseNotExtract,
    setDataInDatabaseNotExtract,
    nameColumnsInExtractNotDatabase,
    setNameColumnsInExtractNotDatabase,
    dataInExtractNotDatabase,
    setDataInExtractNotDatabase,
    shouldRefresh,
    setShouldRefresh,
  }), [nameColumnsInDatabaseNotExtract, dataInDatabaseNotExtract, nameColumnsInExtractNotDatabase, dataInExtractNotDatabase, shouldRefresh]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
