import React from 'react'

export default function Hero() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay */}
      <div className="relative z-10 max-w-3xl px-6 md:px-0 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-left text-[#539CC6]">
            Ótica Arte
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-left text-black">
            A Ótica Arte é movida pela paixão em cuidar da sua visão. Unimos
            experiência, seriedade e atendimento humanizado para oferecer
            produtos de alta qualidade e um serviço diferenciado. Trabalhamos
            apenas com marcas confiáveis e soluções que garantem conforto, estilo
            e segurança para nossos clientes. Nosso compromisso é construir
            relações duradouras, baseadas em confiança, excelência e satisfação.
            Aqui, sua visão é nossa prioridade.
        </p>

        <a
            href="tel:+5511999999999"
            className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-full font-semibold"
        >
            Fale Conosco
        </a>
    </div>

    </section>
  )
}
