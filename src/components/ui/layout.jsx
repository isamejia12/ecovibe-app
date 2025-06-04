import React from 'react';

export const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const PageHeader = ({ title, description }) => (
  <div className="bg-gradient-to-r from-green-800 to-green-600 py-12 mb-8">
    <Container>
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      {description && (
        <p className="text-green-50 text-lg max-w-3xl">{description}</p>
      )}
    </Container>
  </div>
);

export const Section = ({ children, className = '' }) => (
  <section className={`py-12 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export const Footer = () => (
  <footer className="bg-green-900 text-white py-12 mt-auto">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">EcoVibe</h3>
          <p className="text-green-100">
            Moda sostenible para un futuro mejor.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-green-100">
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Marcas</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-green-100">
            <li>Email: info@ecovibe.com</li>
            <li>Tel: +57 300 123 4567</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4 text-green-100">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
        <p>&copy; {new Date().getFullYear()} EcoVibe. Todos los derechos reservados.</p>
      </div>
    </Container>
  </footer>
); 