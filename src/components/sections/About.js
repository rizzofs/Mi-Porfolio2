import React from 'react';
import foto2 from '../../assets/foto2.jpeg';

const About = () => {
  const skills = [
    {
      title: 'Frontend',
      icon: 'fas fa-code',
      color: 'blue',
      items: ['React/JavaScript', 'HTML5/CSS3', 'Tailwind/Bootstrap']
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: 'orange',
      items: ['Node.js/Express', 'Python', 'Cors/Middleware']
    },
    {
      title: 'Databases & More',
      icon: 'fas fa-database',
      color: 'purple',
      items: ['PostgreSQL/SQLite3', 'Firebase', 'Postman']
    }
  ];

  return (
    <section id="sobre-mi" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={foto2} alt="Federico Rizzo trabajando" className="rounded-lg" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-700 mb-6">
              Soy desarrollador Full Stack con más de 3 años de experiencia en
              sistemas web propios, como puntos de venta, e-commerce y
              plataformas informativas. Estudio la Licenciatura en Sistemas de
              Información en la Universidad Nacional de Luján, con formación en
              desarrollo web, bases de datos y backend. Además, soy presidente
              del centro de estudiantes, liderando iniciativas para fortalecer
              la comunidad universitaria. Diseñé Codes Projects, un espacio para
              que estudiantes participen en proyectos reales.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Especializado en JavaScript, React, Node.js y bases de datos tanto
              SQL como NoSQL. Me encanta aprender nuevas tecnologías y enfrentar
              desafíos que me permitan crecer profesionalmente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${skill.color}-50 to-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300`}
                >
                  <h3 className={
                    `font-bold mb-3 text-lg ` +
                    (skill.color === 'blue' ? 'text-blue-600' : skill.color === 'orange' ? 'text-orange-600' : 'text-purple-600')
                  }>
                    <i className={`${skill.icon} mr-2`}></i>{skill.title}
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 dot-${skill.color}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://rizzofs.github.io/Cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                <i className="fas fa-eye mr-2"></i> Ver CV
              </a>
              <a
                href="https://github.com/rizzofs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
              >
                <i className="fab fa-github mr-2"></i> Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 