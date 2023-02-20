import Signup from '../components/Signup'; 
import Login from '../components/Login'; 
import Home from '../components/Home';
import Subscribe from './Subscribe';

import React from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
