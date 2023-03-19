import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutPage from './pages/AboutPage/AboutPage';
import HelpPage from './pages/HelpPage/HelpPage';
import HowToPlayPage from './pages/HowToPlayPage/HowToPlayPage';
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/how-to-play" element={<HowToPlayPage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="*" element={<div>Error 404!</div>}></Route>
            </Routes>
        </Router>
    );
}

export default App;