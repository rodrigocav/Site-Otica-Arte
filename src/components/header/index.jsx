import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

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

        {/* Botão Mobile */}
        <button 
          onClick={() => setOpen(!open)} 
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setOpen(false)} 
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <ul className="flex flex-col mt-20 gap-6 text-center text-gray-700 font-medium">
          <li><a onClick={() => setOpen(false)} href="#about">Sobre</a></li>
          <li><a onClick={() => setOpen(false)} href="#products">Produtos</a></li>
          <li><a onClick={() => setOpen(false)} href="#services">Serviços</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contato</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div 
          onClick={() => setOpen(false)} 
          className="fixed inset-0 bg-black/40 lg:hidden"
        />
      )}
    </header>
  )
}

export default Header
