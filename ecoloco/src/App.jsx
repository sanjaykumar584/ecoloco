import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Enquiry from './components/Enquiry';
import Login from './components/Login'
import Signup from './components/Signup';
import PackageDesc from './components/PackageDesc';

import {AuthListener} from './auth'
import Profile from './components/Profile';
import Packages from './components/Packages';
import CarbCalci from './components/CarbCalci';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/packdesc" element={<PackageDesc />} />
        <Route path="/packs" element={<Packages />} />
        <Route path="/calci" element={<CarbCalci/>} />
      </Routes>
    </Router>
  );
};

export default App;
