import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#1C9997]/76 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        {/* Container principal - logo e botão mobile */}
        <div className="flex justify-between items-center h-16">
          {/* Logo alinhada à esquerda */}
          <div className="flex-shrink-0">
            <img 
              className="h-8 w-auto cursor-pointer" 
              src="/caminho-para-sua-logo.png" 
              alt="Logo"
              onClick={() => handleNavigation('/home')} 
            />
          </div>

          {/* Menu Desktop (oculto em mobile) */}
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/home', label: 'Início' },
              { path: '/parcerias', label: 'Parcerias' },
              { path: '/eventos', label: 'Eventos' },
              { path: '/clube', label: 'Clube de Leitura' },
              { path: '/sinalario', label: 'Sinalário Literário' },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`${isActive(item.path) 
                  ? 'text-[#003C43] border-b-2 border-[#003C43]' 
                  : 'text-white hover:text-[#003C43]/90'} 
                  font-medium pb-1 transition duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão Mobile alinhado à direita */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#003C43] p-2 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile com transição suave */}
        <div className={`md:hidden fixed inset-x-0 z-100 overflow-y-auto transition-all duration-350 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0 bg-[#1C9997]/95' : '-translate-x-full bg-transparent pointer-events-none'}`}>
          <div className="min-h-screen pt-20 px-4">
            <div className="space-y-6">
              {[
                { path: '/home', label: 'Início' },
                { path: '/parcerias', label: 'Parcerias' },
                { path: '/eventos', label: 'Eventos' },
                { path: '/clube', label: 'Clube de Leitura' },
                { path: '/sinalario', label: 'Sinalário Literário' },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left text-white hover:bg-[#003C43]/30 px-6 py-4 rounded-lg text-x transition ${isActive(item.path) ? 'bg-[#003C43]/30 font-bold' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;