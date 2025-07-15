import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetailCodes = () => {
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

        <h1 className="section-title mb-6">CODES++ - Centro de Estudiantes de Sistemas UNLu</h1>
        
        {/* Descripción General */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Descripción General</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Plataforma digital oficial del centro de estudiantes que representa a la comunidad estudiantil de la carrera de Sistemas de la Universidad Nacional de Luján (UNLu).
            </p>
            <p className="text-lg text-gray-700">
              El sitio está diseñado para informar, comunicar actividades, proporcionar recursos útiles y facilitar el contacto con la organización.
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
                <span className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">JavaScript ES6+</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">Bootstrap 5.3.3</span>
                <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">Bootstrap Icons</span>
                <span className="bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-full font-medium">Google Fonts</span>
              </div>
            </div>

            {/* Características principales */}
            <div className="mb-8">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">Características principales</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Diseño responsive mobile-first</li>
                <li>Navegación fija con efectos de scroll</li>
                <li>Animaciones CSS y JavaScript</li>
                <li>Modo oscuro/claro</li>
                <li>Búsqueda en el sitio</li>
                <li>Formularios de preinscripción</li>
                <li>SEO optimizado</li>
              </ul>
            </div>

            <div className="text-center">
              <a href="https://codes-unlu.github.io/Web-Codes/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-external-link-alt mr-2"></i>Ver sitio en vivo
              </a>
            </div>
          </div>
        </div>

        {/* Secciones del sitio */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Secciones del Sitio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">🏠 Hero & Navegación</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Header fijo con blur y transparencia</li>
                <li>• Logo animado con efectos hover</li>
                <li>• Menú responsive con hamburguesa</li>
                <li>• Botones de búsqueda y modo oscuro</li>
                <li>• Navegación suave entre secciones</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">👥 Nosotros & Integrantes</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Historia y misión de CODES++</li>
                <li>• Comisión directiva completa</li>
                <li>• Fotos y enlaces LinkedIn</li>
                <li>• Logros y reconocimientos</li>
                <li>• Valores organizacionales</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">📅 Actividades & Eventos</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Taller de Resolución de Problemas</li>
                <li>• CACIC 2025 - Competencia de programación</li>
                <li>• Expo UNLu 2025 (próximamente)</li>
                <li>• Formularios de preinscripción</li>
                <li>• Estados de eventos en tiempo real</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">📚 Recursos & FAQ</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Repositorio GitHub con bibliografía</li>
                <li>• Guías y apuntes por materia</li>
                <li>• Servidor Discord para estudio</li>
                <li>• Cronograma académico PDF</li>
                <li>• FAQ con 7 preguntas frecuentes</li>
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
                <li>• Paleta de colores turquesa (#39c0c3)</li>
                <li>• Tipografía Inter de Google Fonts</li>
                <li>• Efectos de sombra y hover</li>
                <li>• Animaciones CSS personalizadas</li>
                <li>• Transiciones suaves (0.3s)</li>
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
                <li>• Lazy loading de imágenes</li>
                <li>• CSS variables reutilizables</li>
                <li>• CDN para recursos externos</li>
                <li>• Optimización SEO completa</li>
                <li>• Tiempo de carga &lt; 3s</li>
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

export default ProjectDetailCodes; 