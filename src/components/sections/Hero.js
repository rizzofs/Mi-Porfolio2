import React from 'react';
import foto1 from '../../assets/foto1.jpeg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient text-white"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hola, soy Federico Rizzo
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Desarrollador Full Stack
          </h2>
          <p className="text-lg mb-8">
            Creando soluciones digitales innovadoras y eficientes para tus
            necesidades tecnológicas.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contacto"
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition"
            >
              Contáctame
            </a>
            <a
              href="#proyectos"
              className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl floating">
              <img src={foto1} alt="Federico Rizzo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 