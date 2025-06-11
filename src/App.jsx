import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs'



//pages
import Home from './pages/home/Home'
import MainContent from './pages/home/Home'
import Parcerias from './pages/parcerias/Parcerias'


function App() {
  
  return (
    <Router>
        <Nav/>
        <Routes>
        <Route path="/home" element={<MainContent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parcerias" element={<Parcerias />} />
        </Routes >
        <Footer/>
    </Router>
  )
}

export default App
