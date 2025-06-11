import React from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import InstagramEmbed from '../../contexts/InstagramEmbed.jsx';

function Parcerias() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex justify-between items-center px-0 py-0 mx-10 md:max-w-6xl md:mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Parcerias</h1>
        <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-48 md:w-64 h-auto"
          tabIndex="0"
        />
      </section>

      {/* Bloco de texto */}
      <section className='px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-5xl'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong className="text-[#1C9997]">A K&K Libras</strong> é uma empresa que auxilia na inclusão de pessoas surdas, 
            por meio de interpretação em Libras em empresas e cursos, conta com Surdes Literáries 
            para divulgação dos minicursos de leituras guiadas.
          </p>
          
          <p>
            O primeiro minicurso aconteceu em 18 de março a 15 de abril de 2024, 
            falamos sobre o romance de Frank Kafka, <em>"A Metamorfose"</em>. 
            O segundo foi sobre <em>"A Revolução dos Bichos"</em>, de George Orwell, 
            em 20 de maio a 17 de junho de 2024.
          </p>
        </div>
      </section>

            {/* Seção de vídeos do Instagram */}
        <section className="px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-6xl">
        {/* Título da seção (opcional) */}
        <h3 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
            Nossas Publicações
        </h3>

        {/* Container responsivo */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
            {/* Vídeo 1 - Ocupa 100% em mobile e metade em desktop */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <InstagramEmbed url="https://www.instagram.com/reel/DJU-YBhN_sU" />
            </div>
            
            {/* Vídeo 2 - Oculto em mobile, visível a partir de md */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <InstagramEmbed url="https://www.instagram.com/reel/DJU-YBhN_sU" />
            </div>
        </div>
        </section>

            {/* Seção Imagens */}
        <section className="px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-6xl">
        {/* Título da seção (opcional) */}
        <h3 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
            Nossos Encontros
        </h3>

        {/* Container responsivo */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
            {/* Vídeo 1 - Ocupa 100% em mobile e metade em desktop */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <img src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749612535/image_4_rbn5ua.png" alt="" />
            </div>
            
            {/* Vídeo 2 - Oculto em mobile, visível a partir de md */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <img src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749612534/image_5_qexdht.png" alt="" />
            </div>
        </div> 
        </section>
    </main>
  );
}

export default Parcerias;