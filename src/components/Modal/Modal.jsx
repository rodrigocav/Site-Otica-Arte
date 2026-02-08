import React from "react";
import "./styles.css";

export function Modal({ product, onClose }) {
  if (!product) return null;

  const phone = "+551158179554";

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


            <a href={`tel:${phone}`} className="detalhes-btn">
              📞 Ligar para a loja
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
