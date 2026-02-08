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
      <section id="about">
      <Hero />
      </section>
      <section id="products">
      <RelatedProducts onProductClick={handleProductClick} />
      </section>
      <section id="services">
      <Services />
      </section>
      <section id="contact">
      <Footer />
      </section>
    </>
  );
}

export default App;
