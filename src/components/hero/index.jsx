import React from "react";
import "./styles.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-tag">Ótica Arte</span>

        <h1 className="hero-title">
          Veja melhor.
          <span> Viva melhor.</span>
        </h1>

        <p className="hero-description">
          Tecnologia, conforto e estilo em cada detalhe.
          Óculos modernos para quem exige mais da própria visão.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/5511994285011?text=Olá,%20tudo%20bem?%20Encontrei%20o%20contato%20pelo%20site%20da%20Ótica%20Arte%20e%20gostaria%20de%20receber%20mais%20informações.%20Poderia%20me%20ajudar,%20por%20favor?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fale Conosco
          </a>

          <a href="#products" className="btn-secondary">
            Ver Coleção
          </a>
        </div>
      </div>
    </section>
  );
}