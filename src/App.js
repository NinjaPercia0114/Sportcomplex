import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Equipment from './pages/Equipment';
import Clubs from './pages/Clubs';
import Matches from './pages/Matches';
import Announcements from './pages/Announcements';
import AdminPanel from './pages/AdminPanel';
import ScheduleMatch from './components/Matches/ScheduleMatch';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/schedule-match" element={<ScheduleMatch />} />
              </Routes>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;