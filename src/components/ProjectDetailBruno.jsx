import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CapturaBruno from '../assets/CapturaBruno.png';

const ProjectDetailBruno = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/proyectos" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Volver a proyectos
            </Link>
          </div>

          <h1 className="section-title mb-6">Remises Bruno - Transporte Premium</h1>

          {/* Descripción General */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Descripción General</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 shadow-lg">
              <img src={CapturaBruno} alt="Remises Bruno" className="rounded-xl shadow-lg mb-6 w-full" />
              <p className="text-lg text-gray-700 mb-4">
                Sitio web para Remises Bruno, empresa de transporte ejecutivo y de pasajeros en Chivilcoy, Buenos Aires.
              </p>
              <p className="text-lg text-gray-700">
                El sitio presenta los servicios, flota, contacto y preguntas frecuentes de Remises Bruno, con un diseño moderno, responsivo y optimizado para dispositivos móviles y escritorio.
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-col justify-center">
              {/* Tecnologías */}
              <div className="mb-8">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">Tecnologías utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">HTML5</span>
                  <span className="bg-red-100 text-red-800 text-sm px-4 py-2 rounded-full font-medium">CSS3</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">Bootstrap 5</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">JavaScript</span>
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">AOS</span>
                  <span className="bg-rose-100 text-rose-800 text-sm px-4 py-2 rounded-full font-medium">Swiper.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-full font-medium">Google Fonts</span>
                  <span className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full font-medium">Bootstrap Icons</span>
                  <span className="bg-gray-200 text-gray-900 text-sm px-4 py-2 rounded-full font-medium">Boxicons</span>
                  <span className="bg-gray-300 text-gray-900 text-sm px-4 py-2 rounded-full font-medium">Remixicon</span>
                </div>
              </div>

              {/* Características principales */}
              <div className="mb-8">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">Características principales</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                  <li>Diseño moderno y responsivo (mobile y desktop)</li>
                  <li>Presentación de servicios y flota</li>
                  <li>Galería de vehículos</li>
                  <li>Preguntas frecuentes (FAQ) interactivas</li>
                  <li>Optimización SEO y performance</li>
                  <li>Personalización sencilla de imágenes y colores</li>
                </ul>
              </div>

              {/* Link al sitio (si existe) */}
              {/* <div className="text-center">
                <a href="https://remisesbruno.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <i className="fas fa-external-link-alt mr-2"></i>Ver sitio en vivo
                </a>
              </div> */}
            </div>
          </div>

          {/* Secciones del sitio */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Secciones del Sitio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">🏠 Hero & Navegación</h3>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Header fijo y llamado a la acción</li>
                  <li>• Menú responsive</li>
                  <li>• Navegación suave entre secciones</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">🚗 Flota & Servicios</h3>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Galería de vehículos</li>
                  <li>• Detalle de servicios ofrecidos</li>
                  <li>• Estadísticas y testimonios</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">❓ FAQ & Contacto</h3>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Preguntas frecuentes interactivas</li>
                  <li>• Datos de contacto y redes sociales</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">⚙️ Personalización</h3>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Cambio de logo y favicon</li>
                  <li>• Edición de colores y textos</li>
                  <li>• Agregado de nuevas imágenes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Funcionalidades técnicas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Funcionalidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-blue-700 mb-4 text-lg">🎨 Diseño & UX</h3>
                <ul className="text-blue-800 space-y-2 text-lg">
                  <li>• Paleta de colores personalizada</li>
                  <li>• Tipografía Google Fonts</li>
                  <li>• Efectos de sombra y hover</li>
                  <li>• Animaciones CSS y JS</li>
                  <li>• Transiciones suaves</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-green-700 mb-4 text-lg">📱 Responsive</h3>
                <ul className="text-green-800 space-y-2 text-lg">
                  <li>• Mobile-first design</li>
                  <li>• Breakpoints optimizados</li>
                  <li>• Grid adaptativo</li>
                  <li>• Navegación móvil</li>
                  <li>• Compatibilidad universal</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-purple-700 mb-4 text-lg">⚡ Performance</h3>
                <ul className="text-purple-800 space-y-2 text-lg">
                  <li>• Optimización SEO</li>
                  <li>• Recursos minificados</li>
                  <li>• Meta tags completos</li>
                  <li>• Carga rápida</li>
                  <li>• Hosting estático</li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailBruno; 