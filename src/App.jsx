import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'


//pages
import Home from './pages/home/Home'
import MainContent from './pages/home/Home'


function App() {
  
  return (
    <Router>
        <Nav/>
        <Routes>
        <Route path="/home" element={<MainContent />} />
        <Route path="/home" element={<Home />} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
