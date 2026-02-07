import React, { useEffect } from 'react';

/* Assets */
import turquesaGif from '../../assets/Turquesa.gif';


/* Imagens - Líder */
import Lider from '../../assets/img/Danniki.jpg';

/* Imagens - Membros */
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

function Membro({ img, nome, cargo }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-20 h-20 sm:w-30 sm:h-30 md:w-45 md:h-45 border-4 border-[#1C9997] mb-4 shadow-lg">
        <img
          src={img}
          alt={`Foto de ${nome}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="text w-fit md:text-lg text-center text-gray-800">{nome}</p>
      <p className="text-sm md:text-lg text-center">{cargo}</p>
    </div>
  );
}

function MainContent() {

  useEffect(() => {
    document.title = 'Surdes Literáries';
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="flex flex-col items-center mx-10 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">
          Surdes Literáries
        </h1>

        <img
          src={turquesaGif}
          alt="Decoração turquesa animada"
          className="w-48 md:w-64 h-auto"
        />
      </section>

      {/* Texto institucional */}
      <section className="px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-5xl text-center space-y-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          Surdes Literáries é um coletivo voluntário dedicado a promover a literatura no âmbito da{' '}
          <strong className="text-[#1C9997]">Comunidade Surda</strong>.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Nosso objetivo é compartilhar recomendações, registrar sinais literários,
          notificar atualidades do mundo literário e promover inclusão.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Composto por nove membros surdos apaixonados por livros, HQs, mangás e cinema.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Seja bem-vindo(a/e) ao nosso espaço, onde a magia dos sinais e das palavras se encontram.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          <a
            href="https://cobranca.c6pix.com.br/01K7D8G3RC0GETNGKDEPMGWD8Y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 hover:no-underline"
          >
            Apoie o projeto Surdos Literários
          </a>
          ! Qualquer valor ajuda a manter nosso trabalho acessível e inclusivo.
        </p>
      </section>
<section className="px-4 mx-10 md:px-8 md:mx-auto md:max-w-5xl py-12">
  <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-6">
    Nossa Equipe
  </h2>

  <p className="text-center text-lg text-gray-700 mb-8">
    Agradecemos às pessoas que contribuíram para o desenvolvimento do projeto
    em diferentes momentos.
  </p>

  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
  gap-8
  justify-items-center
  max-w-4xl
  mx-auto
">

    <ul className="text-gray-800 text-base md:text-lg space-y-2 text-center">
      <li><strong>Aldir Junior</strong><br />criador de conteúdo</li>
      <li><strong>Dario Diniz</strong><br />dublador</li>
      <li><strong>Elis de Jesus</strong><br />revisora de textos</li>
      <li><strong>Ferdinand Oliveira</strong><br />criador de conteúdo</li>
    </ul>

    <ul className="text-gray-800 text-base md:text-lg space-y-2 text-center">
      <li><strong>Hidel Silva</strong><br />dublador</li>
      <li><strong>Mayara Silva</strong><br />dubladora</li>
      <li><strong>Marina Souza</strong><br />pesquisadora</li>
      <li><strong>Pablo Dassero</strong><br />dublador</li>
    </ul>

    <ul className="text-gray-800 text-base md:text-lg space-y-2 text-center">
      <li><strong>Vanessa Santos</strong><br />edição de vídeos</li>
      <li><strong>Rafael Oliveira</strong><br />criador de conteúdo</li>  
      <li><strong>Gisele</strong><br />pesquisadora</li>
    </ul>

  </div>
</section>


      {/*  Lider
      <section className="relative px-4 mx-10 md:px-8 md:mx-auto md:max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-12">
          Nossa Equipe
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-25 h-25 sm:w-30 sm:h-30 md:w-45 md:h-45 border-4 border-[#1C9997] mb-4 shadow-lg">
              <img
                src={Lider}
                alt="Foto de Danniki"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-lg text-gray-800">Danniki</p>
            <p className="text-sm text-gray-600">Líder</p>
          </div>
        </div>
      </section>
       */}
     

      {/* 
        <section className="relative px-4 mx-10 md:px-8 md:mx-auto py-12 md:max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <Membro img={Agnes} nome="Agnes" cargo="Web designer" />
          <Membro img={Airam} nome="Airam" cargo="Dublador" />
          <Membro img={Aldir} nome="Aldir" cargo="Membro" />
          <Membro img={Aline} nome="Aline" cargo="Dubladora" />
          <Membro img={Ana} nome="Ana" cargo="Líder de Design" />
          <Membro img={Andrew} nome="Andrew" cargo="Dublador" />
          <Membro img={Cass} nome="Cass" cargo="Membro" />
          <Membro img={Elis} nome="Elis" cargo="Membro" />
          <Membro img={Ferdi} nome="Ferdi" cargo="Membro" />
          <Membro img={Germano} nome="Germano" cargo="Membro" />
          <Membro img={Giselle} nome="Giselle" cargo="Membro" />
          <Membro img={Hidel} nome="Hidel" cargo="Membro" />
          <Membro img={Iara} nome="Iara" cargo="Membro" />
          <Membro img={Murilo} nome="Murilo" cargo="Membro" />
          <Membro img={Rafael} nome="Rafael" cargo="Membro" />
          <Membro img={Valdo} nome="Valdo" cargo="Membro" />
          <Membro img={Vivian} nome="Vivian" cargo="Apoio à Liderança" />

        </div>
      </section>
        
      */}
      

    </main>
  );
}

export default MainContent;
