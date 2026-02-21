import React from "react";
import "./styles.css";

export function Modal({ product, onClose }) {
  if (!product) return null;

  const phone = "5511994285011"; 

  const message = `Olá, tudo bem? Vi o modelo ${product.productName} no site da Ótica Arte e gostaria de mais informações.`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-body">

          {/* COLUNA DA IMAGEM */}
          <div className="image-container">
            <img src={product.photo} alt={product.productName} />
          </div>

          {/* COLUNA DAS INFORMAÇÕES */}
          <div className="info-container">
            <h2>{product.productName}</h2>

            <p className="description">
              {product.productDescription || "Produto de alta qualidade."}
            </p>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="detalhes-btn"
            >
              💬 Falar no WhatsApp
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}