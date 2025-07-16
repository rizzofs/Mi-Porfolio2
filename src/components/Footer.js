import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Federico Rizzo</h3>
            <p className="text-gray-400">Desarrollador Full Stack</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://x.com/rizzofs85" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/federico-s-rizzo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/rizzofs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/federico.rizzo.sebastian/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© 2025 Federico S. Rizzo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 