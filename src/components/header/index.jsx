import React, { useState } from "react";
import "./styles.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="logo otica arte" />
        </div>

        {/* Menu Desktop */}
        <ul className="menu-desktop">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#products">Produtos</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#reviews">Avaliações</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        {/* Botão Mobile */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      <div className={`menu-mobile ${open ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul>
          <li><a onClick={() => setOpen(false)} href="#about">Sobre</a></li>
          <li><a onClick={() => setOpen(false)} href="#products">Produtos</a></li>
          <li><a onClick={() => setOpen(false)} href="#services">Serviços</a></li>
          <li><a onClick={() => setOpen(false)} href="#reviews">Avaliações</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contato</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;