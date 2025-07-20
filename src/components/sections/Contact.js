import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Correo electrónico',
      value: 'federico.s.rizzo@gmail.com',
      link: 'mailto:federico.s.rizzo@gmail.com',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+54 9 2346 612609',
      link: 'https://wa.me/5492346612609',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/federico-s-rizzo',
      link: 'https://www.linkedin.com/in/federico-s-rizzo/',
      bgColor: 'bg-gray-100',
      textColor: 'text-blue-700'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/rizzofs',
      link: 'https://github.com/rizzofs',
      bgColor: 'bg-gray-800',
      textColor: 'text-blue-600'
    }
  ];

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Contacto</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="section-subtitle">¡Hablemos!</h3>
            <p className="text-gray-700 mb-6">
              ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo?
              No dudes en contactarme. Estoy disponible para colaboraciones,
              propuestas laborales o simplemente para charlar sobre tecnología.
            </p>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div className={`${contact.bgColor} p-3 rounded-full mr-4`}>
                    <i className={`${contact.icon} ${contact.textColor}`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{contact.title}</h4>
                    <a
                      href={contact.link}
                      className={`${contact.textColor} hover:underline`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <form
              action="https://formspree.io/f/xyzpyoeg"
              method="POST"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 