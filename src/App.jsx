import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileLayout from './layouts/MobileLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MobileLayout>
    </Router>
  );
}

export default App;
