// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import MyProfile from './pages/MyProfile';

const App = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={token ? <Home /> : <Navigate to="/register" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
