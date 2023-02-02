import { Routes, Route, Navigate } from 'react-router-dom';
import IDataProvider from './context/IDataProvider';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <IDataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </IDataProvider>
  );
}

export default App;
