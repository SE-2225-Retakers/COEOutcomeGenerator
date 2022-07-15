import React from "react";
import './App.css';
import LoginPage from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
