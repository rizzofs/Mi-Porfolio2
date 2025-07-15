import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../../assets/pdv-dashboard.png';
import codesImg from '../../assets/CapturaCodes.png';
import expoImg from '../../assets/CapturaExpo.png';

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  green: 'bg-green-100 text-green-800',
  purple: 'bg-purple-100 text-purple-800',
  red: 'bg-red-100 text-red-800',
  rose: 'bg-rose-100 text-rose-800',
};

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 'pdv',
      title: 'PDV Local (En desarrollo)',
      description: 'Sistema de punto de venta para comercios, con gestión de ventas, inventario y reportes. Interfaz moderna y adaptable.',
      image: dashboardImg,
      technologies: [
        { name: 'Html', color: 'blue' },
        { name: 'Js', color: 'yellow' },
        { name: 'Sass', color: 'rose' },
        { name: 'Node.js', color: 'green' },
        { name: 'Sqlite3', color: 'purple' }
      ],
      link: '/proyectos/pdv',
      linkText: 'Ver detalles'
    },
    {
      id: 'codes',
      title: 'CODES++ - Centro de Estudiantes de Sistemas UNLu',
      description: 'Sitio web institucional one-page del centro de estudiantes que representa a la comunidad estudiantil de Sistemas de la UNLu. Incluye información organizacional, eventos, recursos académicos y FAQ.',
      image: codesImg,
      technologies: [
        { name: 'HTML5', color: 'blue' },
        { name: 'CSS3', color: 'red' },
        { name: 'JavaScript ES6+', color: 'yellow' },
        { name: 'Bootstrap 5.3.3', color: 'purple' }
      ],
      link: 'https://codes-unlu.github.io/Web-Codes/',
      linkText: 'Ver sitio',
      external: true
    },
    {
      id: 'expo',
      title: 'Web Expo UNLu',
      description: 'Página oficial de la Expo UNLu, con información de actividades, cronograma, inscripciones y galería multimedia.',
      image: expoImg,
      technologies: [
        { name: 'HTML', color: 'blue' },
        { name: 'CSS', color: 'red' },
        { name: 'JavaScript', color: 'yellow' }
      ],
      link: 'https://codes-unlu.github.io/Web-Expo/',
      linkText: 'Ver sitio',
      external: true
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Scroll to current slide
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentSlide * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="proyectos" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Mis Proyectos</h2>

        {/* Desktop Grid View */}
        <div className="hidden md:block mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 project-title">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${colorClasses[tech.color]} text-xs px-2 py-1 rounded`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline project-action"
                    >
                      {project.linkText}
                    </a>
                  ) : (
                    <Link
                      to={project.link}
                      className="text-blue-600 font-medium hover:underline project-action"
                    >
                      {project.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-12">
          <div className="relative">
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center px-2"
                  style={{ minWidth: '100%' }}
                >
                  <div className="project-card bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-sm">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 project-title">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${colorClasses[tech.color]} text-xs px-2 py-1 rounded`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                      {project.external ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline project-action"
                        >
                          {project.linkText}
                        </a>
                      ) : (
                        <Link
                          to={project.link}
                          className="text-blue-600 font-medium hover:underline project-action"
                        >
                          {project.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/proyectos"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <i className="fas fa-eye mr-2"></i> Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 