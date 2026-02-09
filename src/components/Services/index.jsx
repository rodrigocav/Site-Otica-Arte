import React from 'react';
import './styles.css';
import ServiceCard from '../ServiceCard';

const Services = () => {
  const listaServicos = [
  { id: 1, titulo: "Exame de Vista", desc: "Realize seu exame com especialistas e mantenha a saúde dos seus olhos em dia." },
  { id: 2, titulo: "Ajuste de Armação", desc: "Ajustamos sua armação para maior conforto e alinhamento perfeito." },
  { id: 3, titulo: "Limpeza Ultrassônica", desc: "Limpeza profunda para suas lentes e armações, mantendo-as como novas." },
  { id: 4, titulo: "Manutenção de Hastes", desc: "Reparos, troca de parafusos e ajustes finos para durabilidade." },
  { id: 5, titulo: "Consultoria de Estilo", desc: "Ajudamos a escolher o modelo ideal para seu rosto e estilo." },
  { id: 6, titulo: "Troca de Lentes", desc: "Substituímos lentes danificadas ou atualizamos seu grau de forma rápida." },
  { id: 7, titulo: "Adaptação de Lentes de Contato", desc: "Ajustamos suas lentes de contato para conforto e visão perfeita." },
  { id: 8, titulo: "Tratamento de Lentes", desc: "Aplicamos antirreflexo, proteção UV e filtro azul nas suas lentes." },
  { id: 9, titulo: "Atualização de Grau", desc: "Verificação e ajuste do seu grau para garantir a melhor visão." },
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