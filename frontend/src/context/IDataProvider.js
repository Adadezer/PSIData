import { useState, useMemo } from 'react';
import IDataContext from './IDataContext';

function IDataProvider({ children }) {
  const [testeProvider, setTesteProvider] = useState('provider funcionando');

  const myContext = useMemo(() => ({
    testeProvider,
    setTesteProvider,
  }), [testeProvider]);

  return (
    <IDataContext.Provider value={myContext}>
      {children}
    </IDataContext.Provider>
  );
}

export default IDataProvider;
