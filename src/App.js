import './App.css';
import AllPersonsPage from './pages/AllPersonsPage';
import PersonPage from './pages/PersonPage';
import FormPage from './pages/FormPage';
import { Routes, Route, } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<AllPersonsPage />} />
        <Route path='Item' element={<PersonPage />} />
        <Route path='Form' element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
