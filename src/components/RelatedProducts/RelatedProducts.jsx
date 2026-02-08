import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { ProductCard } from "../ProductCard/ProductCard";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import data from "../../data/produtos.json";


export function RelatedProducts({ onProductClick }) {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

useEffect(() => {
  if (data.success) {
    setProducts(data.products);
  }
}, []);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.8;

    if (direction === "left") {
      carouselRef.current.scrollLeft -= scrollAmount;
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
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
          <button className="arrow-btn left" onClick={() => handleScroll("left")}>
            <img src={leftArrow} alt="Esquerda" />
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

          <button
            className="arrow-btn right"
            onClick={() => handleScroll("right")}
          >
            <img src={rightArrow} alt="Direita" />
          </button>
        </div>
      </div>
    </section>
  );
}
