import "./styles.css";

export function ProductCard({ product, onClick }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.photo} alt={product.productName} />
      </div>

      <div className="product-info">
        <h3>{product.productName}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <button onClick={() => onClick(product)}>
        DETALHES
      </button>
    </div>
  );
}
