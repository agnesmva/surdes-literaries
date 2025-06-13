import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';



function Clube() {

    useEffect(() => {
    document.title = "Clube de Leitura";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex justify-between items-center px-0 py-0 mx-10 md:max-w-6xl md:mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Clube de Leitura</h1>
        <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-20 md:w-20 h-auto"
          tabIndex="0"
        />
      </section>

      {/* Página em construção */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="bg-[#1C9997]/10 p-8 rounded-full mb-6">
          <HiOutlineWrenchScrewdriver className="text-[#1C9997] text-6xl" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C9997] mb-4 flex items-center gap-2">
          <HiOutlineExclamationTriangle className="text-yellow-500" />
          Página em Construção
          <HiOutlineExclamationTriangle className="text-yellow-500" />
        </h2>
        
        <p className="text-lg text-gray-600 max-w-md">
          Estamos trabalhando para trazer informações incríveis sobre nossos eventos em breve!
        </p>
        
        <div className="mt-8 text-sm text-gray-500 flex items-center gap-1">
          <span>Volte em breve para conferir as novidades</span>
          <span className="animate-bounce">🚧</span>
        </div>
      </section>
    </main>
  );
}

export default Clube;