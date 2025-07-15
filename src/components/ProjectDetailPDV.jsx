import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import pdvDashboard from '../assets/pdv-dashboard.png';
import pdvVentas from '../assets/pdv-ventas.png';
import pdvCompras from '../assets/pdv-compras.png';
import pdvGestion from '../assets/pdv-gestion-productos.png';

const ProjectDetailPDV = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (image, caption) => {
    setSelectedImage({ image, caption });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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

          <h1 className="section-title mb-6">PDV Local - Sistema de Punto de Venta</h1>
          
          {/* Descripción General */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Descripción General</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                Sistema completo de punto de venta desarrollado para comercios locales, con gestión integral de ventas, inventario, compras y reportes detallados.
              </p>
              <p className="text-lg text-gray-700">
                La aplicación ofrece una interfaz moderna y adaptable que optimiza los procesos comerciales, facilitando la gestión diaria del negocio con herramientas intuitivas y eficientes.
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
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full font-medium">JavaScript ES6+</span>
                  <span className="bg-rose-100 text-rose-800 text-sm px-4 py-2 rounded-full font-medium">Sass</span>
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">SQLite3</span>
                </div>
              </div>

              {/* Características principales */}
              <div className="mb-8">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">Características principales</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                  <li>Gestión completa de ventas con múltiples métodos de pago</li>
                  <li>Control de inventario en tiempo real</li>
                  <li>Sistema de compras y proveedores</li>
                  <li>Reportes detallados y estadísticas</li>
                  <li>Interfaz responsive y adaptable</li>
                  <li>Base de datos local con SQLite</li>
                  <li>Backup automático de datos</li>
                </ul>
              </div>

              <div className="text-center">
                <button 
                  disabled
                  className="inline-block bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-4 rounded-lg font-medium cursor-not-allowed transition-all duration-300 shadow-lg opacity-75"
                >
                  <i className="fas fa-clock mr-2"></i>Próximamente en línea
                </button>
              </div>
            </div>
          </div>

          {/* Galería de Funcionalidades */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Galería de Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">📊 Dashboard Principal</h3>
                <img 
                  src={pdvDashboard} 
                  alt="Dashboard PDV" 
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal(pdvDashboard, "Dashboard Principal - Vista general del sistema")}
                />
                <p className="text-gray-700">Panel de control con métricas clave, ventas del día, productos más vendidos y alertas de inventario.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">💰 Módulo de Ventas</h3>
                <img 
                  src={pdvVentas} 
                  alt="Ventas PDV" 
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal(pdvVentas, "Módulo de Ventas - Gestión de transacciones")}
                />
                <p className="text-gray-700">Interfaz intuitiva para procesar ventas, múltiples métodos de pago y gestión de clientes.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">🛒 Gestión de Compras</h3>
                <img 
                  src={pdvCompras} 
                  alt="Compras PDV" 
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal(pdvCompras, "Gestión de Compras - Control de proveedores")}
                />
                <p className="text-gray-700">Sistema completo de compras con gestión de proveedores, órdenes y recepción de mercadería.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-blue-600 mb-4 text-lg">📦 Gestión de Productos</h3>
                <img 
                  src={pdvGestion} 
                  alt="Gestión Productos PDV" 
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal(pdvGestion, "Gestión de Productos - Control de inventario")}
                />
                <p className="text-gray-700">Administración completa del catálogo de productos, categorías, precios y stock.</p>
              </div>
            </div>
          </div>

          {/* Modal para imagen ampliada */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
              <div className="relative max-w-4xl max-h-full">
                <button 
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <i className="fas fa-times"></i>
                </button>
                <img 
                  src={selectedImage.image} 
                  alt="Imagen ampliada" 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
              </div>
            </div>
          )}

        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailPDV; 