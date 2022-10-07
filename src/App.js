import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TestList from './pages/TestList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/tests" element={<TestList/>} />
      </Routes>
    </Router>
  );
}

export default App;
