
import './App.css';
import React, { useEffect, useState } from 'react';
import SignUp from './components/SignUps/SignUp';
import SignIn from './components/SignUps/SignIn';
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import { Login } from '@mui/icons-material';

function App() {
  const [user, setUser] = useState(null);
//   const cors = require("cors");
// app.use(cors());

  useEffect(() => {
    fetch("https://invoicer-backend.herokuapp.com/me").then((r) => {
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
      <Switch>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        </Routes>
        <Dashboard />
       
      </Switch>
    </div>
  );
}

export default App;
