import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Components.css';
import Home from '../pages/Home'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'

export default function NavBar() {
  return (
    <div>
        <Router>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/service">Servicios</Link></li>
                    <li><Link to="/contact">Contactos</Link></li>
                    <li><Link to="/about-us">Sobre Nosotros</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-us" element={<AboutUs/>} />
            </Routes>
        </Router>
    </div>
  )
}
