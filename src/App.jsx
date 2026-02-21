import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";
import Services from "./components/Services";
import { Modal } from "./components/Modal/Modal";
import About from "./components/about";
import Reviews from "./components/Reviews/Reviews";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="products">
        <RelatedProducts onProductClick={handleProductClick} />
      </section>
      <section id="services">
        <Services />
      </section>
      <Reviews />
      <Footer />
      {/* MODAL */}
      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;