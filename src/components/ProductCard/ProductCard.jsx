import "./styles.css";
import productsData from "../../data/produtos.json";

export function ProductCard({ product, onClick }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.photo} alt={product.productName} />
      </div>

      <div className="product-info">
        <h3>{product.productName}</h3>
        <p>Qualidade, conforto e estilo para o seu dia a dia.</p>
      </div>

      <button className="details-btn" onClick={() => onClick(product)}>
        DETALHES
      </button>
    </div>
  );
}
