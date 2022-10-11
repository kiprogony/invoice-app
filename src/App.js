
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/SignUps/SignUp';
import SignIn from './components/SignUps/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
