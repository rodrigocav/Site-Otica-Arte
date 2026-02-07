import { useEffect, useState, useRef } from 'react';
import './styles.css';
import { ProductCard } from "../ProductCard/ProductCard";
import leftArrow from '../../assets/arrow-left.png';
import rightArrow from '../../assets/arrow-right.png';

export function RelatedProducts({ onProductClick }) {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('/produtos.json')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProducts(data.products);
        }
      })
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;

      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="related-products">
      <div className="container">

        <div className="section-header">
          <div className="title-container">
            <div className="line"></div>
            <h2>Produtos relacionados</h2>
            <div className="line"></div>
          </div>
        </div>

        <div className="content">
          <button className="arrow-btn left" onClick={() => handleScroll('left')}>
            <img src={leftArrow} alt="Seta para esquerda" />
          </button>

          <div className="carousel" ref={carouselRef}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onClick={(p) => onProductClick && onProductClick(p)}
              />
            ))}
          </div>

          <button className="arrow-btn right" onClick={() => handleScroll('right')}>
            <img src={rightArrow} alt="Seta para direita" />
          </button>
        </div>

      </div>
    </section>
  );
}
