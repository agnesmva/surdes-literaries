import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import turquesaGif from '../../assets/Turquesa.gif';

function MainContent() {
   const [membros, setMembros] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Buscar membros do backend
    axios.get('https://sl-backend.up.railway.app/api/members')
      .then(response => {
        setMembros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar membros:', error);
      });
  }, []);

  useEffect(() => {
    document.title = "Surdes Literaries";
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="flex justify-between items-center px-0 py-0 mx-10 md:max-w-6xl md:mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Surdes Literários</h1>
        <img
          src={turquesaGif}
          alt="Decoração turquesa animada"
          className="w-48 md:w-64 h-auto"
          tabIndex="0"
        />
      </section>

      {/* Parágrafo */}
      <section className="px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-5xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Surdes Literáries é um coletivo voluntário dedicado a promover a literatura no âmbito da <strong className="text-[#1C9997]">Comunidade Surda</strong>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nosso objetivo é compartilhar recomendações, registrar sinais literários, notificar as atualidades do mundo literários etc., <br /> a fim de promover a inclusão de obras acessíveis para pessoas surdas sinalizantes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Composto por nove membros surdos apaixonados por livros, histórias em quadrinhos, mangás e cinemas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          <br />Seja bem-vinde ao nosso espaço, onde a magia dos sinais e das palavras se encontram.
        </p>
      </section>
       {/* Membro Lider*/}
      <section className="relative px-4 mx-10 md:px-8 md:mx-auto md:max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-12">Nossa Equipe</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="min-w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-0">
              {membros.filter(m => m.team === 'leader').map((membro, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden w-25 h-25 sm:w-30 sm:h-30 md:w-45 md:h-45 border-4 border-[#1C9997] mb-4 shadow-lg">
                    <img 
                      src={membro.url} 
                      alt={`Foto de ${membro.name}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-lg text-gray-800">{membro.name}</p>
                  <p>{membro.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membros */}
      <section className="relative px-4 mx-10 md:px-8 md:mx-auto py-12 md:max-w-6xl">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="min-w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {membros.filter(m => m.team !== 'leader').map((membro, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden w-20 h-20 sm:w-30 sm:h-30 md:w-45 md:h-45 border-4 border-[#1C9997] mb-4 shadow-lg">
                    <img 
                      src={membro.url} 
                      alt={`Foto de ${membro.name}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text w-fit md:text-lg text-center text-gray-800">{membro.name}</p>
                  <p className="text-sm md:text-lg text-center">{membro.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
