import React from 'react';
import './styles.css';

// Usamos a desestruturação para pegar as props
const ServiceCard = ({ titulo, descricao }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">
          <strong>DESCRIÇÃO:</strong> {descricao}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;