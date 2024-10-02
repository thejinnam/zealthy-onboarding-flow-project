import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Admin from './pages/Admin';
import DataTable from './pages/Data';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<DataTable />} />
      </Routes>
  );
};

export default App;
