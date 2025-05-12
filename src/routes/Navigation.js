import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'

export default function Navigation() {
  return (
    <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/service">Servicios</Link></li>
                    <li><Link to="/contact">Contactos</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
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
