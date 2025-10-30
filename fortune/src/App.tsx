import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';
import CreateAccountPage from './pages/CreateAccountPage';

import './App.css';


function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/game"
          element={isAuthenticated ? <GamePage/> : <Navigate to="/login" />}
        />
        <Route path="/create" element={<CreateAccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );

}

export default App;
