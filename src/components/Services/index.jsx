import React from 'react';
import './styles.css';
import ServiceCard from '../ServiceCard';

const Services = () => {
  const listaServicos = [
    { id: 1, titulo: "Exame de Vista", desc: "Realize seu exame com especialista." },
    { id: 2, titulo: "Ajuste de Armação", desc: "Ajustamos sua armação para maior conforto." },
    { id: 3, titulo: "Limpeza Ultrassônica", desc: "Limpeza profunda para suas lentes." },
    { id: 4, titulo: "Manutenção de Hastes", desc: "Reparos e trocas de parafusos." },
    { id: 5, titulo: "Consultoria de Estilo", desc: "Ajudamos a escolher o modelo ideal." },
    { id: 6, titulo: "Entrega em Domicílio", desc: "Receba seus óculos sem sair de casa." },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">SERVIÇOS</h2>
      
      <div className="services-grid">
        {listaServicos.map((servico) => (
          <ServiceCard 
            key={servico.id} 
            titulo={servico.titulo} 
            descricao={servico.desc} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;