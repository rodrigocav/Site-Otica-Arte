import React from "react";

export default function Hero() {
  return (
      <section
      className="relative h-[55vh] md:h-[70vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero.png')" }}
      >
    {/* Overlay escuro */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Conteúdo */}
    <div className="relative z-10 max-w-4xl px-6 md:px-0 mx-auto md:ml-32 text-left">
      
      <span className="uppercase tracking-widest text-xs text-gray-300">
        Ótica Arte
      </span>

      <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-white">
        Veja melhor.  
        <span className="text-[#539CC6]"> Viva melhor.</span>
      </h1>

      <p className="mt-4 text-base md:text-lg text-gray-200 max-w-xl">
        Tecnologia, conforto e estilo em cada detalhe.  
        Óculos modernos para quem exige mais da própria visão.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="tel:+5511999999999"
          className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          Fale Conosco
        </a>

        <a
          href="#products"
          className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
        >
          Ver Coleção
        </a>
      </div>
    </div>
  </section>


  );
}
