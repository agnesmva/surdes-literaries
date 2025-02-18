import './Home.css'
import React from 'react';

function MainContent() {
  // Dados dos membros (substitua com seus dados reais)
  const membros = [
    { nome: 'Aldir Junior', imagem: '../assets/img/Aldir.jpg' },
    { nome: 'Cássia Palópio', imagem: '/assets/img/Cass.jpg' },
    { nome: 'Danniki Martin', imagem: '/assets/img/Danniki.jpg' }
  ];

  // Número de containers (ajuste conforme necessário)
  const containers = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <main>
      {/* Seção Header */}
      <section className="header">
        <img 
          src="../../assets/Turquesa.gif" 
          alt="Decoração turquesa animada" 
          width="200" 
          tabIndex="0"
        />
        <p style={{ width: '400px', alignItems: 'last baseline' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit...
        </p>
      </section>

      {/* Seção Membros - Pré-carrossel */}
      <section className="membros">
        {containers.map((container, index) => (
          <div 
            key={`container-${index}`} 
            className="membrosContainer"
            role="list"
          >
            {membros.map((membro, idx) => (
              <div 
                key={`${container}-${membro.nome}`}
                role="listitem"
                tabIndex={0} // Adiciona navegação por teclado
              >
                <div className="imageContainer">
                  <img 
                    src={membro.imagem} 
                    alt={`Foto de ${membro.nome}`} 
                    loading="lazy"
                  />
                </div>
                <p>{membro.nome}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Seção Parágrafo */}
      <section className="paragrafo">
        <p tabIndex="0">
          Surdes Literáries é um coletivo voluntário dedicado a promover a literatura no âmbito da {' '}
          <span className="destaque">Comunidade Surda</span>. Composto por nove membros surdos...
        </p>
      </section>
    </main>
  );
}

export default MainContent;
