import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardView from './components/DashboardView';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardView />} />
    </Routes>
  );
};

// const App = () => {
//   return <LoginPage />;
// };

export default App;

