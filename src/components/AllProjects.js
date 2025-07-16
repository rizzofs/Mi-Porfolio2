import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import pdvDashboard from '../assets/pdv-dashboard.png';
import capturaCodes from '../assets/CapturaCodes.png';
import capturaExpo from '../assets/CapturaExpo.png';
import Foto3 from '../assets/Foto3.jpg';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 'pdv',
      title: 'PDV Local (En desarrollo)',
      description: 'Sistema de punto de venta para comercios, con gestión de ventas, inventario y reportes. Dashboard con estadísticas en tiempo real: ventas, ingresos, productos más vendidos, stock bajo, acciones rápidas y últimas ventas. Interfaz moderna y adaptable.',
      image: pdvDashboard,
      technologies: [
        { name: 'Html', color: 'blue' },
        { name: 'Js', color: 'yellow' },
        { name: 'Sass', color: 'rose' },
        { name: 'Node.js', color: 'green' },
        { name: 'Sqlite3', color: 'purple' }
      ],
      link: '/proyectos/pdv',
      linkText: 'Ver más'
    },
    {
      id: 'codes',
      title: 'CODES++ - Centro de Estudiantes de Sistemas UNLu',
      description: 'Sitio web institucional one-page del centro de estudiantes que representa a la comunidad estudiantil de Sistemas de la UNLu. Incluye información organizacional, eventos, recursos académicos y FAQ.',
      image: capturaCodes,
      technologies: [
        { name: 'HTML5', color: 'blue' },
        { name: 'CSS3', color: 'red' },
        { name: 'JavaScript ES6+', color: 'yellow' },
        { name: 'Bootstrap 5.3.3', color: 'purple' }
      ],
      link: '/proyectos/codes',
      linkText: 'Ver más'
    },
    {
      id: 'expo',
      title: 'Web Expo UNLu',
      description: 'Página oficial de la Expo UNLu, con información de actividades, cronograma, inscripciones y galería multimedia.',
      image: capturaExpo,
      technologies: [
        { name: 'HTML', color: 'blue' },
        { name: 'CSS', color: 'red' },
        { name: 'JavaScript', color: 'yellow' }
      ],
      link: '/proyectos/expo',
      linkText: 'Ver más'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
    rose: 'bg-rose-100 text-rose-800',
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Header */}
      <section className="hero-gradient text-white py-20 mb-0">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovación y Tecnología en Acción</h1>
            <p className="text-lg mb-6 max-w-2xl">Explora una selección de proyectos desarrollados con tecnologías modernas, enfocados en resolver necesidades reales y aportar valor.</p>
            <a href="#contacto-cta" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition">Contáctame</a>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="section-title mb-12">Proyectos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-white rounded-xl shadow-lg border border-gray-100 transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 project-title">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
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
                  <Link to={project.link} className="text-blue-600 font-medium hover:underline project-action">
                    {project.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto CTA */}
        <section id="contacto-cta" className="py-16 bg-white mt-8 rounded-xl shadow-md max-w-6xl mx-auto px-4">
          <h2 className="section-title mb-8">¿Tienes un proyecto en mente?</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <p className="text-lg text-gray-700 mb-6">Estoy disponible para colaboraciones, propuestas laborales o simplemente para charlar sobre tecnología. ¡No dudes en contactarme!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Correo electrónico</h4>
                    <a href="mailto:federico.s.rizzo@gmail.com" className="text-blue-600 hover:underline">federico.s.rizzo@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <i className="fab fa-whatsapp text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">WhatsApp</h4>
                    <a href="https://wa.me/5492346612609" className="text-green-600 hover:underline">+54 9 2346 612609</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <i className="fab fa-linkedin text-blue-700"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/federico-s-rizzo/" className="text-blue-700 hover:underline">linkedin.com/in/federico-s-rizzo</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-full mr-4">
                    <i className="fab fa-github text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GitHub</h4>
                    <a href="https://github.com/rizzofs" className="text-blue-600 hover:underline">github.com/rizzofs</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src={Foto3} alt="Federico Rizzo" className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg object-cover" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AllProjects; 