import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MainPage from './pages/mainPage/MainPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import StatisticsPage from './pages/statisticsPages/seeStatistics';
import ForgotPasswordPage from './pages/forgotPasswordPage/ForgotPasswordPage';
import HistoriaMH from './pages/statisticsPages/Historia_MH';
import HistoriaMC from './pages/statisticsPages/Historia_MC';
import HistoriaMO from './pages/statisticsPages/Historia_MO';
import NewPage from './components/NewPage/NewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/validate/:token'
          element={<NewPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='/my-profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/statistics'
          element={
            <ProtectedRoute>
              <StatisticsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={<ForgotPasswordPage />}
        />
        <Route
          path='/statistics/historia/mode/historia'
          element={
            <ProtectedRoute>
              <HistoriaMH />
            </ProtectedRoute>
          }
        />
        <Route
          path='/statistics/historia/mode/contrarreloj'
          element={
            <ProtectedRoute>
              <HistoriaMC />
            </ProtectedRoute>
          }
        />
        <Route
          path='/statistics/historia/mode/online'
          element={
            <ProtectedRoute>
              <HistoriaMO />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
