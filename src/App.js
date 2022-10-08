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
import { useSelector } from 'react-redux';
import { userState$ } from './redux/selectors';
import ProtectedRoute from './components/ProtectedRoute';
import Contest from './pages/Contest';
import SecondContest from './pages/SecondContest';
import ThirdContest from './pages/ThirdContest';

function App() {

  // const dispatch = useDispatch();
  const user = useSelector(userState$);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/' element={<TestList user={user} />} />
          <Route path='/takecontest/:id' element={<Contest/>} />
          <Route path='/secondtest/:id' element={<SecondContest/>} />
          <Route path='/thirdtest/:id' element={<ThirdContest/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
