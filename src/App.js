import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Shipping from './pages/Shipping'; 
import Tracking from './pages/Tracking';
import AboutUs from './components/Footer/AboutUs';
import Privacy from './components/Footer/PrivacyPolicy';
import Terms from './components/Footer/TermsAndConditions';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import HowToShip from './pages/Howtoship';
import Quote from './pages/Quote';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/createashipment" element={<Shipping />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="/TermsAndConditions" element={<Terms />} />
          <Route path="/howtoship" element={<HowToShip />} />
          <Route path="/calculatecost" element={<Quote />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
 </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
