import Footer from './components/footer';
import Header from './components/header'
import Hero from './components/hero'
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";
import Services from './components/Services';

function App() {

  const handleProductClick = (product) => {
    alert(product.productName);
  };

  return (
    <>
      <Header />
      <Hero />
      <RelatedProducts onProductClick={handleProductClick} />
      <Services />
      <Footer />
    </>
  );
}

export default App;
