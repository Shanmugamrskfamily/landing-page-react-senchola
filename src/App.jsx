import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Signup from './pages/Signup';

function App() {
  

  return (
    <>
  <Router>
      <Navigation/>
      <ToastContainer />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
