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
import Eventos from './pages/eventos/Eventos'
import Clube from './pages/clube/Clube'
import Dicionario from './pages/dicionario/Dicionario'
import Loja from './pages/loja/Loja'
import Cursos from './pages/cursos/Cursos.jsx'


function App() {
  
  return (
    <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<MainContent />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/clube" element={<Clube />} />
        <Route path="/dicionario" element={<Dicionario />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/cursos" element={<Cursos />} />
        </Routes >
        <Footer/>
    </Router>
  )
}

export default App
