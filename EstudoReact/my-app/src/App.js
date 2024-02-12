import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Suporte from './components/pages/Suporte';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className='container-fluid d-flex justify-content-center flex-column text-center'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Empresa />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Suporte' element={<Suporte />} />
      </Routes>
    </Router>
  );
}

export default App;
