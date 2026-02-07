import Header from './components/header'
import Hero from './components/hero'
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";

function App() {

  const handleProductClick = (product) => {
    alert(product.productName);
  };

  return (
    <>
      <Header />
      <Hero />
      <RelatedProducts onProductClick={handleProductClick} />
    </>
  );
}

export default App;
