import React from "react";
import "./styles.css";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <h2>Avaliações dos Clientes</h2>

      <div className="google-rating">
        <span className="stars">★★★★★</span>
        <span className="rating-text">4.8 de 5</span>
        <span className="review-count">(26 avaliações no Google)</span>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <h3>Fabio Rodrigues</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">2 avaliações • há 1 ano</span>
          <p>
            Bom Dia Paulo e Viviane. Obrigado pela atenção especial que vocês me deram.
            Fiquei muito surpreso com a qualidade dos óculos.
            Atenção, confiança e qualidade são pontos que eu valorizo bastante.
            Um ótimo dia para vocês e forte abraço.
          </p>
        </div>

        <div className="review-card">
          <h3>Leila</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">1 avaliação • há 2 anos</span>
          <p>
            Passando para agradecer toda a equipe da ótica, em especial o Dr. Paulo,
            que além de excelente profissional é muito atencioso e prestativo.
            Fiz um óculos com uma receita do SUS em que a médica marcou o grau errado
            e prontamente o Dr. Paulo resolveu a situação.
            Recomendo o serviço deles. Sou cliente fiel agora.
          </p>
        </div>

        <div className="review-card">
          <h3>Rosana Nunes</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">5 avaliações • há 1 ano</span>
          <p>
            Há 13 anos eu e meu filho só fazemos exame de vista e óculos com vocês.
            Atendimento maravilhoso, exame de qualidade e não ficam te empurrando
            um monte de coisas para encarecer seus óculos.
            Indico para todo mundo, vai lá que não irá se arrepender.
          </p>
        </div>

        <div className="review-card">
          <h3>Andressa Belfort</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">4 avaliações • 1 foto • há 2 anos</span>
          <p>
            Faz anos que só faço os meus óculos com essa ótica,
            atendimento e prazo de entrega é sem igual!
            Obrigada Silvio e equipe por esse trabalho atencioso
            que faz a diferença!
          </p>
        </div>

        <div className="review-card">
          <h3>Regis Nascimento</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">1 avaliação • há 1 ano</span>
          <p>
            Excelente ótica, venho de longe pois são grandes profissionais.
            Recomendo!!
          </p>
        </div>

        <div className="review-card">
          <h3>Vivian Cavicchioli</h3>
          <div className="review-stars">★★★★★</div>
          <span className="review-meta">1 avaliação • há 2 anos atrás</span>
          <p>
            Gostaria de agradecer e divulgar o trabalho de vocês. Sou cliente a mais de 10 anos e o atendimento é de excelência, podem confiar!
          </p>
        </div>
      </div>

      <a
        href="https://www.google.com/maps/place/Ótica+Arte/@-23.6492881,-46.7496938,17z/data=!3m1!5s0x94ce53df3b28321b:0x9b0c2f3e0584756f!4m8!3m7!1s0x94ce53df3d6acad3:0x1e7fac091890c4b1!8m2!3d-23.6492881!4d-46.7496938!9m1!1b1!16s%2Fg%2F1tmgdk8c?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-google"
      >
        Ver todas no Google
      </a>
    </section>
  );
};

export default Reviews;