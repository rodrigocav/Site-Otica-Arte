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
          <a href="tel:+5511999999999" className="btn-primary">
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