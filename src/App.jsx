import Header from './components/header'
import Hero from './components/hero'
import { ProductCard } from "./components/ProductCard/ProductCard";


function App() {

  const products = [
    {id: 1, productName: "Óculos Ray-Ban", price: 299.9, photo: "/oculos1.png"},
    {id: 2, productName: "Óculos Feminino", price: 199.9, photo: "/oculos2.png"}
  ]

  const handleClick = (product) => {
    alert(product.productName)
  }

  return (
    <>
      <Header />
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleClick}
          />
        ))}
      </section>
    </>
  )
}

export default App
