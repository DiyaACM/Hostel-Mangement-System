import React from 'react';
import Home from './components/Home'
import User from './components/User';
import Admin from './components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div>
     <>
      { }
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />            
          <Route path="/User" element={<User />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
