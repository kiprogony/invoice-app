
import './App.css';
import React, { useEffect, useState } from 'react';
import SignUp from './components/SignUps/SignUp';
import SignIn from './components/SignUps/SignIn';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard.js';
import { Login } from '@mui/icons-material';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user => setUser(user)));
      }
    });
  }, []);

  // if (user) {   
  //   return <h3>Welcome, {user.username}!</h3>;
  // } else {
  //   return <Login onlogin={setUser} />;
  // }
    // if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
