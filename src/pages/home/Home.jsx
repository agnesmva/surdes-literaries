import React from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import Aldir from '../../assets/img/Aldir.jpg';
import Agnes from '../../assets/img/Agnes.jpg';
import Aline from '../../assets/img/Aline.jpg';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function MainContent() {
  // Dados dos membros corrigidos
  const membros = [
    { nome: 'Aldir Junior', imagem: Aldir },
    { nome: 'Agnes Maria', imagem: Agnes },
    { nome: 'Aline', imagem: Aline }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(membros.length / 9));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(membros.length / 9)) % Math.ceil(membros.length / 9));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Seção Header */}
      <section className="flex justify-between items-center px-0 py-0 mx-10 md:max-w-6xl md:mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Surdes Literários</h1>
        <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-48 md:w-64 h-auto"
          tabIndex="0"
        />
      </section>

      {/* Seção Parágrafo */}
      <section className='px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-5xl text-center'>
        <p className="text-lg text-gray-700 leading-relaxed">
          Surdes Literáries é um coletivo voluntário dedicado a promover a literatura no âmbito da <strong className='text-[#1C9997]'>Comunidade Surda</strong>.   
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nosso objetivo é compartilhar recomendações, registrar sinais literários, notificar as atualidades do mundo literários etc., <br /> a fim de promover a inclusão de obras acessíveis para pessoas surdas sinalizantes.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Composto por nove membros surdos apaixonados por livros, histórias em quadrinhos, mangás e cinemas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          <br></br>Seja bem-vinde ao nosso espaço, onde a magia dos sinais e das palavras se encontram.
        </p>
      </section>

      {/* Seção Membros - Carrossel */}
      <section className="relative px-4 mx-10 md:px-8 md:mx-auto py-12 md:max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-12">Nossa Equipe</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {membros.map((membro, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-[#1C9997] mb-4 shadow-lg">
                    <img 
                      src={membro.imagem} 
                      alt={`Foto de ${membro.nome}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-lg text-gray-800">{membro.nome}</p>
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