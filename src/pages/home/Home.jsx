import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import turquesaGif from '../../assets/Turquesa.gif';
import dannikiFoto from '../../assets/img/Danniki.jpg';
import Agnes from '../../assets/img/Agnes.jpg';
import Airam from '../../assets/img/Airam.jpg';
import Aldir from '../../assets/img/Aldir.jpg';
import Aline from '../../assets/img/Aline.jpg';
import Ana from '../../assets/img/Ana.jpg';
import Andrew from '../../assets/img/Andrew.jpg';
import Cass from '../../assets/img/Cass.jpg';
import Elis from '../../assets/img/Elis.png';
import Ferdi from '../../assets/img/Ferdi.jpg';
import Germano from '../../assets/img/Germano.jpg';
import Giselle from '../../assets/img/Giselle.jpg';
import Hidel from '../../assets/img/Hidel.jpg';
import Iara from '../../assets/img/Iara.jpg';
import Murilo from '../../assets/img/Murilo.jpg';
import Rafael from '../../assets/img/Rafael.jpg';
import Valdo from '../../assets/img/Valdo.jpg';
import Vivian from '../../assets/img/Vivian.jpg';

function MainContent() {
   const [membros, setMembros] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [equipeIndex, setEquipeIndex] = useState(0);

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
      <section className="flex flex-col items-center mx-10 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Surdes Literáries</h1>
        <img
          src={turquesaGif}
          alt="Decoração turquesa animada"
          className="w-48 md:w-64 h-auto"
          tabIndex="0"
        />
      </section>

      {/* Parágrafo */}
      <section className="px-4 mx-10 md:mx-auto md:px-0 md:max-w-5xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Seja bem-vindo(a/e) ao nosso espaço, onde a magia dos sinais e das palavras se conecta.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          O <strong className="text-[#1C9997]">Surdes Literáries</strong> é um coletivo voluntário composto por membros da <strong className="text-[#1C9997]">Comunidade Surda</strong> que compartilham a paixão por livros, HQs, mangás e cinema. O propósito é fortalecer a literatura acessível, registrando sinais literários, compartilhando resenhas, divulgando notícias do meio cultural e gerando inclusão.
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="https://cobranca.c6pix.com.br/01K7D8G3RC0GETNGKDEPMGWD8Y"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-semibold
              text-white
              bg-[#1C9997]
              px-8
              py-3
              rounded-lg
              hover:bg-[#158a83]
              transition-colors
              focus:outline-none
              focus:ring-2
              focus:ring-[#1C9997]
              focus:ring-offset-2
            "
          >
            Apoie o Surdes Literáries!
          </a>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Sua contribuição de qualquer valor, é fundamental para mantermos nossa produção de conteúdo acessível e inclusiva.
        </p>
      </section>
       {/* Nossa Equipe Carrossel */}
      <section className="relative px-4 mx-10 md:px-8 md:mx-auto md:max-w-6xl mt-12">
        <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-12">Nossa Equipe</h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <button
              onClick={() => setEquipeIndex((prev) => (prev - 1 + 10) % 10)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Membro anterior"
            >
              <HiChevronLeft className="text-2xl md:text-3xl text-[#1C9997]" />
            </button>

            <div className="w-full md:w-auto">
              {(() => {
                const membrosEquipe = [
                  { name: 'Danniki Martins', role: 'Líder', foto: dannikiFoto },
                  { name: 'Agnes', role: 'Membro', foto: Agnes },
                  { name: 'Airam', role: 'Membro', foto: Airam },
                  { name: 'Aldir', role: 'Membro', foto: Aldir },
                  { name: 'Aline', role: 'Membro', foto: Aline },
                  { name: 'Ana', role: 'Membro', foto: Ana },
                  { name: 'Andrew', role: 'Membro', foto: Andrew },
                  { name: 'Cass', role: 'Membro', foto: Cass },
                  { name: 'Elis', role: 'Membro', foto: Elis },
                  { name: 'Ferdi', role: 'Membro', foto: Ferdi },
                ];

                return (
                  <>
                    {/* Mobile: uma pessoa por vez */}
                    <div className="md:hidden flex flex-col items-center">
                      {(() => {
                        const membro = membrosEquipe[equipeIndex % 10];
                        return (
                          <>
                            <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 border-4 border-[#1C9997] mb-4 shadow-lg bg-[#1C9997]">
                              {membro.foto && (
                                <img
                                  src={membro.foto}
                                  alt={`Foto de ${membro.name}`}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              )}
                            </div>
                            <p className="text-lg font-semibold text-center text-[#1C9997]">
                              {membro.name}
                            </p>
                            <p className="text-md text-center text-gray-600">
                              {membro.role}
                            </p>
                          </>
                        );
                      })()}
                    </div>

                    {/* Desktop: três pessoas lado a lado */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8 md:min-w-max">
                      {[0, 1, 2].map((offset) => {
                        const index = (equipeIndex + offset) % 10;
                        const membro = membrosEquipe[index];
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-[#1C9997] mb-4 shadow-lg bg-[#1C9997]">
                              {membro.foto && (
                                <img
                                  src={membro.foto}
                                  alt={`Foto de ${membro.name}`}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              )}
                            </div>
                            <p className="text-lg font-semibold text-center text-[#1C9997]">
                              {membro.name}
                            </p>
                            <p className="text-md text-center text-gray-600">
                              {membro.role}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </div>

            <button
              onClick={() => setEquipeIndex((prev) => (prev + 1) % 10)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Próximo membro"
            >
              <HiChevronRight className="text-2xl md:text-3xl text-[#1C9997]" />
            </button>
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
