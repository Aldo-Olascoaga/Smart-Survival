import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import StatisticsPage from './pages/statisticsPages/seeStatistics';
import ForgotPasswordPage from './pages/forgotPasswordPage/ForgotPasswordPage';
import HistoriaMH from './pages/statisticsPages/Historia_MH';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/my-profile'
          element={<ProfilePage />}
        />
        <Route
          path='/statistics'
          element={<StatisticsPage />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPasswordPage />}
        />
        <Route
          path='/statistics/historia/mode/historia'
          element={<HistoriaMH />}
        />
      </Routes>
    </Router>
  );
}

export default App;
