import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetailExpo = () => {
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

        <h1 className="section-title mb-6">Expo UNLu Web - Stand Virtual de Sistemas</h1>
        
        {/* Descripción General */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Descripción General</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Sitio web interactivo desarrollado para representar el stand virtual de la <strong>Licenciatura en Sistemas de Información</strong> durante la <strong>Expo UNLu 2025</strong>.
            </p>
            <p className="text-lg text-gray-700">
              El proyecto ofrece una experiencia digital completa e interactiva para estudiantes de secundaria y público interesado en conocer la carrera, combinando información educativa con actividades gamificadas para crear un engagement significativo.
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
                <span className="bg-orange-100 text-orange-800 text-sm px-4 py-2 rounded-full font-medium">HTML5</span>
                <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">CSS3</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">JavaScript ES6+</span>
                <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">Font Awesome</span>
                <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">Google Fonts</span>
              </div>
            </div>

            {/* Características principales */}
            <div className="mb-8">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">Características principales</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Diseño moderno con gradientes y efectos glassmorphism</li>
                <li>Totalmente responsive para dispositivos móviles y desktop</li>
                <li>Navegación intuitiva con menú hamburguesa para móviles</li>
                <li>Animaciones suaves y efectos de hover</li>
                <li>Accesibilidad con etiquetas ARIA y navegación por teclado</li>
                <li>Actividades gamificadas interactivas</li>
                <li>SEO optimizado</li>
              </ul>
            </div>

            <div className="text-center">
              <a href="https://codes-unlu.github.io/Web-Expo/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
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
              <h3 className="font-bold text-blue-600 mb-4 text-lg">🏠 Página Principal</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Navegación principal con menú hamburguesa</li>
                <li>• Diseño glassmorphism con gradientes</li>
                <li>• Animaciones suaves y efectos hover</li>
                <li>• Accesibilidad completa con ARIA</li>
                <li>• Responsive design optimizado</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">🧠 Cuestionario Vocacional</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• 10 preguntas aleatorizadas</li>
                <li>• Comparación entre Sistemas y Ciencia de Datos</li>
                <li>• Algoritmo de scoring con porcentajes</li>
                <li>• Resultados visuales con emojis</li>
                <li>• Duración estimada: 3 minutos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">🎮 UNLuWords - Juego</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• Juego tipo Wordle con 3 niveles</li>
                <li>• Palabras temáticas de tecnología</li>
                <li>• Sistema de pistas visuales</li>
                <li>• 6 intentos por nivel</li>
                <li>• Sorteo para los mejores tiempos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">📚 Información & FAQ</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li>• 8 preguntas frecuentes sobre ingreso</li>
                <li>• Información sobre inscripción</li>
                <li>• Detalles sobre gratuidad</li>
                <li>• 5 charlas informativas</li>
                <li>• Horarios y ubicaciones detallados</li>
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
                <li>• Gradientes #667eea a #764ba2</li>
                <li>• Tipografía Inter de Google Fonts</li>
                <li>• Efectos glassmorphism</li>
                <li>• Animaciones CSS personalizadas</li>
                <li>• Transiciones suaves</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-green-700 mb-4 text-lg">📱 Responsive</h3>
              <ul className="text-green-800 space-y-2 text-lg">
                <li>• Mobile-first design</li>
                <li>• Breakpoints optimizados</li>
                <li>• Grids flexibles adaptativos</li>
                <li>• Navegación móvil</li>
                <li>• Compatibilidad universal</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-purple-700 mb-4 text-lg">⚡ Performance</h3>
              <ul className="text-purple-800 space-y-2 text-lg">
                <li>• Sin dependencias pesadas</li>
                <li>• CSS y JS optimizados</li>
                <li>• Meta tags completos</li>
                <li>• SEO optimizado</li>
                <li>• Carga rápida</li>
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

export default ProjectDetailExpo; 