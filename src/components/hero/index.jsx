import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-3xl px-6 md:px-0 mt-24 text-center md:text-left mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-bold text-[#539CC6]">
          Ótica Arte
        </h1>

        <p className="mt-4 text-base md:text-lg leading-relaxed text-white">
          Cuidamos da sua visão com qualidade, confiança e estilo.  
          Soluções modernas para seu dia a dia.  
          Sua visão em boas mãos.
        </p>

        <a
          href="tel:+5511999999999"
          className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-full font-semibold text-white"
        >
          Fale Conosco
        </a>
      </div>
    </section>  
  )
}
  