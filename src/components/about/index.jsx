import React from 'react';
import "./styles.css";


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* TEXTO */}
        <div className="about-text-box">
          <h2>Sobre a Ótica Arte</h2>
          <p className="about-highlight">
            Muito mais que óculos. Cuidamos da sua visão com estilo e tecnologia.
          </p>

          <p className="about-description">
            A Ótica Arte nasceu com o propósito de oferecer soluções completas em
            saúde visual, unindo atendimento humanizado, produtos de qualidade e
            tecnologia de ponta. Trabalhamos com lentes modernas, armações
            confortáveis e marcas reconhecidas no mercado.
          </p>

          <p className="about-description">
            Nosso compromisso é proporcionar conforto, confiança e bem-estar,
            ajudando você a enxergar o mundo com mais nitidez e estilo.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h4>Missão</h4>
              <p>
                Oferecer soluções visuais com qualidade, ética e excelência.
              </p>
            </div>

            <div className="about-card">
              <h4>Visão</h4>
              <p>
                Ser referência em saúde visual e atendimento na região.
              </p>
            </div>

            <div className="about-card">
              <h4>Valores</h4>
              <p>
                Respeito, inovação, compromisso e cuidado com o cliente.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="about-image">
          <img
            src="/about-otica.webp"
            alt="Interior da Ótica"
          />
        </div>
      </div>
    </section>
  );
}
