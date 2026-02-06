import React from 'react'
import './style.css'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="logo otica arte" className="h-12 md:h-16 lg:h-20" />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-pink-500 transition">Sobre</a></li>
          <li><a href="#products" className="hover:text-pink-500 transition">Produtos</a></li>
          <li><a href="#services" className="hover:text-pink-500 transition">Serviços</a></li>
          <li><a href="#contact" className="hover:text-pink-500 transition">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header