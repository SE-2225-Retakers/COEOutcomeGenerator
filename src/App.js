import React from "react";
import './App.css';
import Signin from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
