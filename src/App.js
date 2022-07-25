import React from "react";
import './App.css';
import Signin from "./pages/SignInWithGoogle";
import LogInContainer from "./pages/LoginPageWithToken";
import { HomePage } from './pages/HomePage';
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/loginToken' element={<LogInContainer />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </UserProvider>

    </div>

  );
}

export default App;
