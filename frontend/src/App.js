import { Routes, Route, Navigate } from 'react-router-dom';
import IDataProvider from './context/IDataProvider';
import Debits from './pages/Debit';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <IDataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debits" element={<Debits />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </IDataProvider>
  );
}

export default App;
