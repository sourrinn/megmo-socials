import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/login" element={ <Login /> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
