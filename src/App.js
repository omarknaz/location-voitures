import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Listing from './components/Listing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HomeClient from './components/Home-client/HomeClient';
import Reservation from './components/Home-client/Reservation';
import Profil from './components/Home-client/Profil';
import Complaint from './components/Home-client/Complaint';
import Historical from './components/Home-client/Historical';
import Admin from './components/admin/Admin';
import DataTables from './components/admin/Data-tables';
import Reclamation from './components/admin/Reclamation';
import Voiture from './components/admin/Voitures';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
        <div classNameName="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/login"   element={<Login/>} />
        <Route path="/reservation"  element={<Reservation/>} />
        <Route path="/complaint" element={<Complaint/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/historical"   element={<Historical/>} />
        <Route path="/Register"   element={<Register/>} />
      </Routes>

    </div>
    </Router>
    
  );
}

export default App
